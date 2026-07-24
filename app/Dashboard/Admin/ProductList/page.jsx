'use client'; // Required - hooks & browser APIs use ho rahe hain

import { useState, useEffect } from 'react';
import axios from 'axios';
import './productlist.css';

const API_URL = 'https://api.bitcoinbutik.com';
const MAX_IMAGES = 10;

const initialProductState = {
    id: null,
    title: '',
    description: '',
    price: '',
    goldPrice: '',
    category: '',
    stock: '0',
    grams: '1',
    hasSilver: true,
    hasGold: true,
    images: Array(MAX_IMAGES).fill(null),
    video: null,
};

export default function Page() {
    const [products, setProducts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentProduct, setCurrentProduct] = useState(initialProductState);
    const [imagePreviews, setImagePreviews] = useState(Array(MAX_IMAGES).fill(null));
    const [videoPreview, setVideoPreview] = useState(null);
    const [activeMedia, setActiveMedia] = useState({ src: '', type: 'image' });
    const [searchTerm, setSearchTerm] = useState('');

    // ---- Orders ke liye naye states ----
    const [activeTab, setActiveTab] = useState('products'); // 'products' | 'orders'
    const [orders, setOrders] = useState([]);
    const [ordersLoading, setOrdersLoading] = useState(false);
    const [ordersError, setOrdersError] = useState('');
    const [orderSearchTerm, setOrderSearchTerm] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (activeTab === 'orders') {
            fetchOrders();
        }
    }, [activeTab]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${API_URL}/api/products`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // ---- Orders fetch karne ka function ----
    const fetchOrders = async () => {
        setOrdersLoading(true);
        setOrdersError('');
        try {
            const response = await axios.get(`${API_URL}/api/orders`);
            // Kai baar API { orders: [...] } bhejti hai, kai baar direct array
            const data = Array.isArray(response.data)
                ? response.data
                : (response.data?.orders || response.data?.data || []);
            // Naye order sabse upar (date ke hisaab se sort)
            const sorted = [...data].sort((a, b) => {
                const dateA = new Date(a.createdAt || a.orderDate || a.date || 0);
                const dateB = new Date(b.createdAt || b.orderDate || b.date || 0);
                return dateB - dateA;
            });
            setOrders(sorted);
        } catch (error) {
            console.error("Error fetching orders:", error);
            setOrdersError('Failed to load orders. Please try again.');
        } finally {
            setOrdersLoading(false);
        }
    };

    // ---- Order helpers: tumhari exact API schema ke hisaab se ----
    const getOrderItems = (order) => order.items || [];

    const getOrderFirstItem = (order) => {
        const items = getOrderItems(order);
        return items.length > 0 ? items[0] : null;
    };

    const getItemImage = (item) => {
        if (!item?.image) return 'https://via.placeholder.com/150';
        // Kabhi kabhi purane orders me localhost image URL save ho gaya hai (jaise order e2ae39e0),
        // usko live domain pe fix kar dete hain taaki image tooti hui na dikhe
        if (item.image.startsWith('http://localhost')) {
            return item.image.replace(/^http:\/\/localhost:\d+/, API_URL);
        }
        return item.image;
    };

    const getItemTitle = (item) => item?.name || 'Untitled Product';

    const getItemPrice = (item) => (item?.price !== undefined && item?.price !== null ? item.price : null);

    const getItemQty = (item) => item?.quantity || 1;

    const getItemSize = (item) => item?.size || null;

    const getOrderTotal = (order) => Number(order.finalTotal ?? order.subtotal ?? 0);

    const getOrderDate = (order) => {
        if (!order.createdAt) return 'N/A';
        try {
            return new Date(order.createdAt).toLocaleString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
        } catch {
            return 'N/A';
        }
    };

    const getOrderId = (order) => order._id || 'N/A';

    const getOrderNumber = (order) => order.orderNumber || `#${String(getOrderId(order)).slice(-8)}`;

    // paymentStatus jo backend se aa raha hai, wahi as-is dikhate hain (paid/pending/failed etc.)
    const getOrderStatus = (order) => order.paymentStatus || 'pending';

    const getCustomerName = (order) => {
        const c = order.customerInfo;
        if (!c) return 'N/A';
        return [c.firstName, c.lastName].filter(Boolean).join(' ') || 'N/A';
    };

    const getCustomerEmail = (order) => order.customerInfo?.email || 'N/A';

    const getCustomerPhone = (order) => order.customerInfo?.phone || 'N/A';

    const getShippingAddressText = (order) => {
        const c = order.customerInfo;
        const s = order.shippingDetails;
        if (!c && !s) return 'N/A';
        const parts = [
            c?.streetAddress1,
            c?.streetAddress2,
            s?.city || c?.city,
            s?.state || c?.state,
            s?.zip || c?.zip,
            s?.country || c?.country,
        ].filter(Boolean);
        return parts.length > 0 ? parts.join(', ') : 'N/A';
    };

    const getPaymentMethod = (order) => {
        const method = order.paymentMethod || 'N/A';
        // "bitcoin_lightning" jaise slugs ko readable bana dete hain
        return method.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    };

    const openOrderView = (order) => {
        setSelectedOrder(order);
        setShowOrderModal(true);
    };

    const closeOrderModal = () => {
        setShowOrderModal(false);
        setSelectedOrder(null);
    };

    const filteredOrders = orders.filter(order => {
        const term = orderSearchTerm.toLowerCase();
        if (!term) return true;
        const idMatch = String(getOrderId(order)).toLowerCase().includes(term);
        const nameMatch = getCustomerName(order).toLowerCase().includes(term);
        const emailMatch = getCustomerEmail(order).toLowerCase().includes(term);
        const itemMatch = getOrderItems(order).some(item => getItemTitle(item).toLowerCase().includes(term));
        return idMatch || nameMatch || emailMatch || itemMatch;
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentProduct({ ...currentProduct, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCurrentProduct({ ...currentProduct, [name]: checked });

        if (!checked) {
            if (name === 'hasSilver') {
                setCurrentProduct(prev => ({ ...prev, hasSilver: false, price: '' }));
            } else if (name === 'hasGold') {
                setCurrentProduct(prev => ({ ...prev, hasGold: false, goldPrice: '' }));
            }
        }
    };

    const handleImageFileChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...currentProduct.images];
            const newPreviews = [...imagePreviews];

            if (newPreviews[index] && newPreviews[index].startsWith('blob:')) {
                URL.revokeObjectURL(newPreviews[index]);
            }
            newImages[index] = file;
            newPreviews[index] = URL.createObjectURL(file);

            setCurrentProduct({ ...currentProduct, images: newImages });
            setImagePreviews(newPreviews);
        }
    };

    const handleVideoFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (videoPreview && videoPreview.startsWith('blob:')) {
                URL.revokeObjectURL(videoPreview);
            }
            setCurrentProduct({ ...currentProduct, video: file });
            setVideoPreview(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = (e, index) => {
        e.preventDefault();
        e.stopPropagation();

        const newImages = [...currentProduct.images];
        const newPreviews = [...imagePreviews];

        if (newPreviews[index] && newPreviews[index].startsWith('blob:')) {
            URL.revokeObjectURL(newPreviews[index]);
        }
        newImages[index] = null;
        newPreviews[index] = null;

        setCurrentProduct({ ...currentProduct, images: newImages });
        setImagePreviews(newPreviews);
        const fileInput = document.getElementById(`image-input-${index}`);
        if (fileInput) fileInput.value = '';
    };

    const handleRemoveVideo = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (videoPreview && videoPreview.startsWith('blob:')) {
            URL.revokeObjectURL(videoPreview);
        }
        setCurrentProduct({ ...currentProduct, video: isEditing ? '' : null });
        setVideoPreview(null);
        const fileInput = document.getElementById('video-input');
        if (fileInput) fileInput.value = '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!currentProduct.hasSilver && !currentProduct.hasGold) {
            alert('Please select at least one product type (Silver or Gold).');
            return;
        }
        if (currentProduct.hasSilver && (!currentProduct.price || currentProduct.price === '')) {
            alert('Please provide Silver price for Silver product.');
            return;
        }
        if (currentProduct.hasGold && (!currentProduct.goldPrice || currentProduct.goldPrice === '')) {
            alert('Please provide Gold price for Gold product.');
            return;
        }
        if (!currentProduct.grams || currentProduct.grams === '' || parseFloat(currentProduct.grams) < 0.01) {
            alert('Please provide a valid gram weight (at least 0.01 grams).');
            return;
        }

        const formData = new FormData();
        formData.append('title', currentProduct.title);
        formData.append('description', currentProduct.description);
        formData.append('category', currentProduct.category);
        formData.append('stock', currentProduct.stock);
        formData.append('grams', currentProduct.grams);
        formData.append('hasSilver', currentProduct.hasSilver);
        formData.append('hasGold', currentProduct.hasGold);

        if (currentProduct.hasSilver) formData.append('price', currentProduct.price);
        if (currentProduct.hasGold) formData.append('goldPrice', currentProduct.goldPrice);

        const imageOrder = [];
        const newImageFiles = [];

        currentProduct.images.forEach(img => {
            if (typeof img === 'string') {
                imageOrder.push(img);
            } else if (img instanceof File) {
                imageOrder.push(`NEW_FILE_${newImageFiles.length}`);
                newImageFiles.push(img);
            }
        });

        if (imageOrder.length === 0) {
            alert('Product must have at least one image.');
            return;
        }

        formData.append('imageOrder', JSON.stringify(imageOrder));
        newImageFiles.forEach(file => formData.append('images', file));

        if (currentProduct.video instanceof File) {
            formData.append('video', currentProduct.video);
        } else if (isEditing && currentProduct.video === '') {
            formData.append('video', '');
        }

        try {
            let response;
            if (isEditing) {
                response = await axios.put(`${API_URL}/api/products/${currentProduct.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                if (response.data?.product) {
                    setProducts(prev =>
                        prev.map(p => p._id === currentProduct.id ? response.data.product : p)
                    );
                }
            } else {
                response = await axios.post(`${API_URL}/api/products`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                if (response.data?.product) {
                    setProducts(prev => [response.data.product, ...prev]);
                }
            }

            alert(isEditing ? 'Product updated successfully!' : 'Product created successfully!');
            resetForm();
            setTimeout(() => fetchProducts(), 500);

        } catch (error) {
            console.error('Submit error:', error);
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    const handleEditClick = (product) => {
        setIsEditing(true);

        const currentImagesState = Array(MAX_IMAGES).fill(null);
        const imagePreviewsState = Array(MAX_IMAGES).fill(null);

        if (product.image?.length > 0) {
            product.image.slice(0, MAX_IMAGES).forEach((path, i) => {
                currentImagesState[i] = path;
                imagePreviewsState[i] = `${API_URL}/${path.replace(/\\/g, '/')}`;
            });
        }

        const hasSilver = product.hasSilver !== undefined ? product.hasSilver : (product.price !== null && product.price !== undefined);
        const hasGold = product.hasGold !== undefined ? product.hasGold : (product.goldPrice !== null && product.goldPrice !== undefined);

        setCurrentProduct({
            id: product._id,
            title: product.title,
            description: product.description,
            price: hasSilver && product.price !== undefined && product.price !== null ? product.price : '',
            goldPrice: hasGold && product.goldPrice !== undefined && product.goldPrice !== null ? product.goldPrice : '',
            category: product.category,
            stock: String(product.stock !== undefined ? product.stock : 0),
            grams: String(product.grams !== undefined ? product.grams : 1),
            hasSilver,
            hasGold,
            images: currentImagesState,
            video: product.video || null,
        });

        setImagePreviews(imagePreviewsState);
        setVideoPreview(product.video ? `${API_URL}/${product.video.replace(/\\/g, '/')}` : null);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`${API_URL}/api/products/${id}`);
                alert('Product deleted successfully!');
                setProducts(prev => prev.filter(p => p._id !== id));
            } catch (error) {
                console.error("Error deleting product:", error);
                alert('Failed to delete product');
            }
        }
    };

    const resetForm = () => {
        setIsEditing(false);
        setShowForm(false);
        imagePreviews.forEach(p => { if (p?.startsWith('blob:')) URL.revokeObjectURL(p); });
        if (videoPreview?.startsWith('blob:')) URL.revokeObjectURL(videoPreview);
        setCurrentProduct(initialProductState);
        setImagePreviews(Array(MAX_IMAGES).fill(null));
        setVideoPreview(null);
    };

    const openProductView = (product) => {
        setSelectedProduct(product);
        if (product.image?.length > 0) {
            setActiveMedia({ src: `${API_URL}/${product.image[0].replace(/\\/g, '/')}`, type: 'image' });
        } else if (product.video) {
            setActiveMedia({ src: `${API_URL}/${product.video.replace(/\\/g, '/')}`, type: 'video' });
        } else {
            setActiveMedia({ src: '', type: 'image' });
        }
        setShowProductModal(true);
    };

    const closeModal = () => {
        setShowProductModal(false);
        setSelectedProduct(null);
        setActiveMedia({ src: '', type: 'image' });
    };

    const filteredProducts = products.filter(product =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStockDisplay = (product) => product.stock !== undefined ? product.stock : 0;

    const getGramsDisplay = (product) => {
        if (product.grams === undefined || product.grams === null) return '1.00g';
        return `${Number(product.grams).toFixed(2)}g`;
    };

    const getPriceDisplay = (product, priceType) => {
        if (priceType === 'silver') {
            const hasSilver = product.hasSilver !== undefined ? product.hasSilver : (product.price !== null && product.price !== undefined);
            if (!hasSilver) return 'N/A';
            return product.price !== null && product.price !== undefined ? `$${Number(product.price).toFixed(2)}` : 'N/A';
        } else {
            const hasGold = product.hasGold !== undefined ? product.hasGold : (product.goldPrice !== null && product.goldPrice !== undefined);
            if (!hasGold) return 'N/A';
            return product.goldPrice !== null && product.goldPrice !== undefined ? `$${Number(product.goldPrice).toFixed(2)}` : 'N/A';
        }
    };

    return (
        <>
            <div className="product-list-page">
                <main className="main-content">
                    <header className="page-header">
                        <h1>{activeTab === 'products' ? 'Products Management' : 'Orders Management'}</h1>

                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                            <button
                                onClick={() => setActiveTab('products')}
                                className={activeTab === 'products' ? 'btn-primary' : 'btn-secondary'}
                                type="button"
                            >
                                Products
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={activeTab === 'orders' ? 'btn-primary' : 'btn-secondary'}
                                type="button"
                            >
                                Orders {orders.length > 0 ? `(${orders.length})` : ''}
                            </button>
                        </div>

                        {activeTab === 'products' ? (
                            <>
                                <div className="search-container">
                                    <input
                                        type="text"
                                        placeholder="Search by title, category or description..."
                                        className="search-input"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="header-actions">
                                    <button
                                        onClick={() => { resetForm(); setIsEditing(false); setShowForm(true); }}
                                        className="add-product-btn"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                        Add Product
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="search-container">
                                <input
                                    type="text"
                                    placeholder="Search by order id, customer name, email or product..."
                                    className="search-input"
                                    value={orderSearchTerm}
                                    onChange={(e) => setOrderSearchTerm(e.target.value)}
                                />
                            </div>
                        )}
                    </header>

                    {activeTab === 'products' ? (
                        <div className="product-table-container">
                            <table className="product-table">
                                <thead>
                                    <tr>
                                        <th className="image-col">Image</th>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Grams</th>
                                        <th>Silver Price</th>
                                        <th>Gold Price</th>
                                        <th>Stock</th>
                                        <th className="actions-col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                                        <tr key={product._id}>
                                            <td data-label="Image" onClick={() => openProductView(product)}>
                                                <img
                                                    src={product.image?.length > 0 ? `${API_URL}/${product.image[0].replace(/\\/g, '/')}` : 'https://via.placeholder.com/150'}
                                                    alt={product.title}
                                                    className="table-product-image"
                                                />
                                            </td>
                                            <td data-label="Title" onClick={() => openProductView(product)}>
                                                <span className="product-title-cell">{product.title}</span>
                                            </td>
                                            <td data-label="Description" onClick={() => openProductView(product)}>
                                                <span className="description">{product.description}</span>
                                            </td>
                                            <td data-label="Category" onClick={() => openProductView(product)}>
                                                <span className="category-tag">{product.category}</span>
                                            </td>
                                            <td data-label="Grams" onClick={() => openProductView(product)}>
                                                {getGramsDisplay(product)}
                                            </td>
                                            <td data-label="Silver Price" onClick={() => openProductView(product)}>
                                                {getPriceDisplay(product, 'silver')}
                                            </td>
                                            <td data-label="Gold Price" onClick={() => openProductView(product)}>
                                                {getPriceDisplay(product, 'gold')}
                                            </td>
                                            <td data-label="Stock" onClick={() => openProductView(product)}>
                                                {getStockDisplay(product)}
                                            </td>
                                            <td data-label="Actions">
                                                <div className="table-actions">
                                                    <button onClick={() => handleEditClick(product)} className="action-btn" title="Edit Product">
                                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Z" />
                                                        </svg>
                                                    </button>
                                                    <button onClick={() => handleDelete(product._id)} className="action-btn" title="Delete Product">
                                                        <svg width="16" height="16" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="9" className="empty-state">
                                                <div className="empty-state-content">
                                                    <h3>No products found</h3>
                                                    <p>Add a new product to get started!</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        // ================= ORDERS SECTION =================
                        <div className="product-table-container">
                            {ordersLoading ? (
                                <div className="empty-state">
                                    <div className="empty-state-content">
                                        <h3>Loading orders...</h3>
                                    </div>
                                </div>
                            ) : ordersError ? (
                                <div className="empty-state">
                                    <div className="empty-state-content">
                                        <h3>{ordersError}</h3>
                                        <button className="btn-primary" onClick={fetchOrders} type="button">Retry</button>
                                    </div>
                                </div>
                            ) : filteredOrders.length > 0 ? (
                                <div
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                                        gap: '1rem',
                                        padding: '1rem',
                                    }}
                                >
                                    {filteredOrders.map((order) => {
                                        const firstItem = getOrderFirstItem(order);
                                        const items = getOrderItems(order);
                                        const extraCount = items.length > 1 ? items.length - 1 : 0;
                                        return (
                                            <div
                                                key={getOrderId(order)}
                                                onClick={() => openOrderView(order)}
                                                style={{
                                                    border: '1px solid #e5e5e5',
                                                    borderRadius: '10px',
                                                    padding: '1rem',
                                                    cursor: 'pointer',
                                                    background: '#fff',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '0.6rem',
                                                    transition: 'box-shadow 0.2s ease',
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.08)'}
                                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                                            >
                                                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={getItemImage(firstItem)}
                                                        alt={getItemTitle(firstItem)}
                                                        style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }}
                                                    />
                                                    <div style={{ minWidth: 0 }}>
                                                        <div style={{ fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                            {getItemTitle(firstItem)}
                                                        </div>
                                                        {extraCount > 0 && (
                                                            <div style={{ fontSize: '0.8rem', color: '#777' }}>+{extraCount} more item{extraCount > 1 ? 's' : ''}</div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ fontWeight: 700 }}>${Number(getOrderTotal(order)).toFixed(2)}</span>
                                                    <span
                                                        className="category-tag"
                                                        style={{
                                                            textTransform: 'capitalize',
                                                            background: ['paid', 'succeeded', 'completed'].includes(getOrderStatus(order)) ? '#d7f5df' : getOrderStatus(order) === 'failed' ? '#fde2e2' : '#fff3cd',
                                                            color: ['paid', 'succeeded', 'completed'].includes(getOrderStatus(order)) ? '#1a7431' : getOrderStatus(order) === 'failed' ? '#b42318' : '#8a6d1a',
                                                        }}
                                                    >
                                                        {getOrderStatus(order)}
                                                    </span>
                                                </div>

                                                <div style={{ fontSize: '0.8rem', color: '#777' }}>
                                                    {getOrderNumber(order)}
                                                </div>
                                                <div style={{ fontSize: '0.8rem', color: '#777' }}>
                                                    {getOrderDate(order)}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="empty-state">
                                    <div className="empty-state-content">
                                        <h3>No orders found</h3>
                                        <p>Orders will appear here once customers checkout.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </main>

                {showForm && (
                    <div className="modal-overlay">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                                <button onClick={resetForm} className="close-btn">×</button>
                            </div>
                            <form onSubmit={handleSubmit} className="product-form">
                                <div className="form-group">
                                    <label htmlFor="title">Product Title</label>
                                    <input id="title" type="text" name="title" value={currentProduct.title} onChange={handleInputChange} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Product Description</label>
                                    <textarea id="description" name="description" value={currentProduct.description} onChange={handleInputChange} required rows="4"></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">Category</label>
                                    <input id="category" type="text" name="category" value={currentProduct.category} onChange={handleInputChange} required />
                                </div>

                                <div className="form-group">
                                    <label>Product Types (Select at least one)</label>
                                    <div style={{ display: 'flex', gap: '2rem', marginTop: '0.5rem' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                name="hasSilver"
                                                checked={currentProduct.hasSilver}
                                                onChange={handleCheckboxChange}
                                            />
                                            <span>Silver Product</span>
                                        </label>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                name="hasGold"
                                                checked={currentProduct.hasGold}
                                                onChange={handleCheckboxChange}
                                            />
                                            <span>Gold Product</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="grams">Gram Weight</label>
                                        <input
                                            id="grams"
                                            type="number"
                                            name="grams"
                                            value={currentProduct.grams}
                                            onChange={handleInputChange}
                                            required
                                            step="0.01"
                                            min="0.01"
                                            placeholder="e.g., 1, 5, 10"
                                        />
                                    </div>
                                    {currentProduct.hasSilver && (
                                        <div className="form-group">
                                            <label htmlFor="price">Silver Price</label>
                                            <input
                                                id="price"
                                                type="number"
                                                name="price"
                                                value={currentProduct.price}
                                                onChange={handleInputChange}
                                                required={currentProduct.hasSilver}
                                                step="0.01"
                                                min="0"
                                            />
                                        </div>
                                    )}
                                    {currentProduct.hasGold && (
                                        <div className="form-group">
                                            <label htmlFor="goldPrice">Gold Price</label>
                                            <input
                                                id="goldPrice"
                                                type="number"
                                                name="goldPrice"
                                                value={currentProduct.goldPrice}
                                                onChange={handleInputChange}
                                                required={currentProduct.hasGold}
                                                step="0.01"
                                                min="0"
                                            />
                                        </div>
                                    )}
                                    <div className="form-group">
                                        <label htmlFor="stock">Stock Quantity</label>
                                        <input
                                            id="stock"
                                            type="number"
                                            name="stock"
                                            value={currentProduct.stock}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                        />
                                    </div>
                                </div>

                                <div className="form-group-flex">
                                    <div className="form-group form-group-images">
                                        <label className="form-label">Product Images (up to {MAX_IMAGES})</label>
                                        <div className="image-upload-grid">
                                            {Array.from({ length: MAX_IMAGES }).map((_, index) => (
                                                <div key={index} className="image-upload-slot">
                                                    <label htmlFor={`image-input-${index}`} className="image-upload-label">
                                                        {imagePreviews[index] ? (
                                                            // eslint-disable-next-line @next/next/no-img-element
                                                            <img src={imagePreviews[index]} alt={`Preview ${index}`} className="image-preview" />
                                                        ) : (
                                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                                            </svg>
                                                        )}
                                                    </label>
                                                    {imagePreviews[index] && (
                                                        <button type="button" className="remove-media-btn" onClick={(e) => handleRemoveImage(e, index)}>×</button>
                                                    )}
                                                    <input
                                                        type="file"
                                                        id={`image-input-${index}`}
                                                        onChange={(e) => handleImageFileChange(e, index)}
                                                        accept="image/*"
                                                        style={{ display: 'none' }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="form-group form-group-video">
                                        <label className="form-label">Product Video (Optional)</label>
                                        <div className="video-upload-slot">
                                            <label htmlFor="video-input" className="video-upload-label">
                                                {videoPreview ? (
                                                    <video src={videoPreview} muted loop className="video-preview" />
                                                ) : (
                                                    <div className="video-placeholder">
                                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                                            <path fill="currentColor" d="M17 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5l4 4v-11l-4 4Z" />
                                                        </svg>
                                                        <span>Add Video</span>
                                                    </div>
                                                )}
                                            </label>
                                            {videoPreview && (
                                                <button type="button" className="remove-media-btn" onClick={handleRemoveVideo}>×</button>
                                            )}
                                            <input
                                                type="file"
                                                id="video-input"
                                                onChange={handleVideoFileChange}
                                                accept="video/*"
                                                style={{ display: 'none' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-actions">
                                    <button type="button" onClick={resetForm} className="btn-secondary">Cancel</button>
                                    <button type="submit" className="btn-primary">
                                        {isEditing ? 'Update Product' : 'Add Product'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {showProductModal && selectedProduct && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content product-view-modal" onClick={(e) => e.stopPropagation()}>
                            <button onClick={closeModal} className="close-btn modal-close-top-right">×</button>
                            <div className="product-view-grid">
                                <div className="gallery-container">
                                    <div className="main-media-wrapper">
                                        {activeMedia.type === 'video' ? (
                                            <video src={activeMedia.src} className="main-product-media" controls autoPlay muted loop />
                                        ) : (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={activeMedia.src || 'https://via.placeholder.com/400'}
                                                alt={selectedProduct.title}
                                                className="main-product-media"
                                            />
                                        )}
                                    </div>
                                    <div className="thumbnail-list">
                                        {selectedProduct.image?.map((img, index) => (
                                            <button
                                                key={`img-${index}`}
                                                className={`thumbnail-btn ${activeMedia.src.includes(img.replace(/\\/g, '/')) && activeMedia.type === 'image' ? 'active' : ''}`}
                                                onClick={() => setActiveMedia({ src: `${API_URL}/${img.replace(/\\/g, '/')}`, type: 'image' })}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={`${API_URL}/${img.replace(/\\/g, '/')}`} alt={`Thumbnail ${index + 1}`} />
                                            </button>
                                        ))}
                                        {selectedProduct.video && (
                                            <button
                                                key="vid-thumb"
                                                className={`thumbnail-btn video-thumb ${activeMedia.src.includes(selectedProduct.video.replace(/\\/g, '/')) && activeMedia.type === 'video' ? 'active' : ''}`}
                                                onClick={() => setActiveMedia({ src: `${API_URL}/${selectedProduct.video.replace(/\\/g, '/')}`, type: 'video' })}
                                            >
                                                <video src={`${API_URL}/${selectedProduct.video.replace(/\\/g, '/')}`} muted />
                                                <div className="play-icon-overlay">
                                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M8 5.14v14l11-7l-11-7Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="info-container">
                                    <span className="info-category-badge">{selectedProduct.category}</span>
                                    <h2 className="info-title">{selectedProduct.title}</h2>
                                    <p className="info-description">{selectedProduct.description}</p>
                                    <div className="info-price">
                                        {(selectedProduct.hasSilver !== false && selectedProduct.price !== null && selectedProduct.price !== undefined) && (
                                            <span>Silver: ${Number(selectedProduct.price).toFixed(2)}</span>
                                        )}
                                        {(selectedProduct.hasGold !== false && selectedProduct.goldPrice !== null && selectedProduct.goldPrice !== undefined) && (
                                            <span style={{ marginLeft: (selectedProduct.hasSilver !== false && selectedProduct.price !== null) ? '1rem' : '0' }}>
                                                Gold: ${Number(selectedProduct.goldPrice).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="info-stock">
                                        <span>Stock: {getStockDisplay(selectedProduct)}</span>
                                        <span style={{ marginLeft: '1rem', color: '#666' }}>
                                            Weight: {getGramsDisplay(selectedProduct)}
                                        </span>
                                    </div>
                                    <div className="info-actions">
                                        <button
                                            onClick={() => { closeModal(); handleEditClick(selectedProduct); }}
                                            className="btn-primary"
                                        >
                                            Edit Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ================= ORDER DETAIL MODAL ================= */}
                {showOrderModal && selectedOrder && (
                    <div className="modal-overlay" onClick={closeOrderModal}>
                        <div
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                            style={{ maxWidth: '640px', width: '90%' }}
                        >
                            <div className="modal-header">
                                <h2>{getOrderNumber(selectedOrder)}</h2>
                                <button onClick={closeOrderModal} className="close-btn">×</button>
                            </div>

                            <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                                {/* Status + Date */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    <span
                                        className="category-tag"
                                        style={{
                                            textTransform: 'capitalize',
                                            background: ['paid', 'succeeded', 'completed'].includes(getOrderStatus(selectedOrder)) ? '#d7f5df' : getOrderStatus(selectedOrder) === 'failed' ? '#fde2e2' : '#fff3cd',
                                            color: ['paid', 'succeeded', 'completed'].includes(getOrderStatus(selectedOrder)) ? '#1a7431' : getOrderStatus(selectedOrder) === 'failed' ? '#b42318' : '#8a6d1a',
                                        }}
                                    >
                                        {getOrderStatus(selectedOrder)}
                                    </span>
                                    <span style={{ color: '#777', fontSize: '0.9rem' }}>{getOrderDate(selectedOrder)}</span>
                                </div>

                                {/* Items */}
                                <div>
                                    <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem' }}>Items</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                        {getOrderItems(selectedOrder).map((item, idx) => (
                                            <div
                                                key={idx}
                                                style={{
                                                    display: 'flex',
                                                    gap: '0.75rem',
                                                    alignItems: 'center',
                                                    border: '1px solid #eee',
                                                    borderRadius: '8px',
                                                    padding: '0.6rem',
                                                }}
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={getItemImage(item)}
                                                    alt={getItemTitle(item)}
                                                    style={{ width: '56px', height: '56px', objectFit: 'cover', borderRadius: '6px', flexShrink: 0 }}
                                                />
                                                <div style={{ flex: 1, minWidth: 0 }}>
                                                    <div style={{ fontWeight: 600 }}>{getItemTitle(item)}</div>
                                                    <div style={{ fontSize: '0.85rem', color: '#777' }}>
                                                        Qty: {getItemQty(item)}
                                                        {getItemSize(item) ? ` • Size: ${getItemSize(item)}` : ''}
                                                    </div>
                                                </div>
                                                <div style={{ fontWeight: 600 }}>
                                                    {getItemPrice(item) !== null ? `$${Number(getItemPrice(item)).toFixed(2)}` : 'N/A'}
                                                </div>
                                            </div>
                                        ))}
                                        {getOrderItems(selectedOrder).length === 0 && (
                                            <p style={{ color: '#777' }}>No item details available for this order.</p>
                                        )}
                                    </div>
                                </div>

                                {/* Total */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #eee', paddingTop: '0.75rem', fontWeight: 700, fontSize: '1.1rem' }}>
                                    <span>Total</span>
                                    <span>${Number(getOrderTotal(selectedOrder)).toFixed(2)}</span>
                                </div>

                                {/* Customer Info */}
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Customer Details</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '0.9rem', color: '#333' }}>
                                        <span><strong>Name:</strong> {getCustomerName(selectedOrder)}</span>
                                        <span><strong>Email:</strong> {getCustomerEmail(selectedOrder)}</span>
                                        <span><strong>Phone:</strong> {getCustomerPhone(selectedOrder)}</span>
                                        <span><strong>Address:</strong> {getShippingAddressText(selectedOrder)}</span>
                                        <span><strong>Payment Method:</strong> {getPaymentMethod(selectedOrder)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}