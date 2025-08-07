import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Package,
  Save,
  X
} from 'lucide-react';
import Modal from '../components/Modal';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: '스마트폰 케이스',
      category: '액세서리',
      price: 25000,
      stock: 150,
      status: '판매중',
      image: '/api/placeholder/60/60',
      sales: 156,
      description: '고품질 실리콘 소재로 제작된 스마트폰 케이스입니다.'
    },
    {
      id: 2,
      name: '무선 이어폰',
      category: '전자제품',
      price: 89000,
      stock: 45,
      status: '판매중',
      image: '/api/placeholder/60/60',
      sales: 89,
      description: '블루투스 5.0 지원 무선 이어폰입니다.'
    },
    {
      id: 3,
      name: '노트북 스탠드',
      category: '사무용품',
      price: 45000,
      stock: 0,
      status: '품절',
      image: '/api/placeholder/60/60',
      sales: 67,
      description: '알루미늄 소재의 접이식 노트북 스탠드입니다.'
    },
    {
      id: 4,
      name: '블루투스 스피커',
      category: '전자제품',
      price: 120000,
      stock: 23,
      status: '판매중',
      image: '/api/placeholder/60/60',
      sales: 45,
      description: '고음질 블루투스 스피커입니다.'
    },
    {
      id: 5,
      name: '휴대폰 충전기',
      category: '액세서리',
      price: 15000,
      stock: 200,
      status: '판매중',
      image: '/api/placeholder/60/60',
      sales: 234,
      description: '고속 충전 지원 USB-C 충전기입니다.'
    }
  ]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '전자제품',
    price: '',
    stock: '',
    description: ''
  });

  const categories = ['all', '전자제품', '액세서리', '사무용품'];

  // 상품 관리 함수들
  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const product = {
        id: Math.max(...products.map(p => p.id)) + 1,
        ...newProduct,
        price: parseInt(newProduct.price),
        stock: parseInt(newProduct.stock),
        status: '판매중',
        sales: 0,
        image: '/api/placeholder/60/60'
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', category: '전자제품', price: '', stock: '', description: '' });
      setShowAddModal(false);
      alert('상품이 성공적으로 등록되었습니다.');
    } else {
      alert('필수 정보를 모두 입력해주세요.');
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleUpdateProduct = () => {
    if (selectedProduct) {
      setProducts(products.map(p => 
        p.id === selectedProduct.id ? selectedProduct : p
      ));
      setShowEditModal(false);
      setSelectedProduct(null);
      alert('상품 정보가 수정되었습니다.');
    }
  };

  const handleDeleteProduct = (productId) => {
    if (window.confirm('정말로 이 상품을 삭제하시겠습니까?')) {
      setProducts(products.filter(p => p.id !== productId));
      alert('상품이 삭제되었습니다.');
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      '판매중': 'badge-success',
      '품절': 'badge-danger',
      '판매중지': 'badge-warning'
    };
    return statusMap[status] || 'badge-info';
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* 상단 액션 바 */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2 className="card-title">상품 관리</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={16} />
            새 상품 등록
          </button>
        </div>

        {/* 검색 및 필터 */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
            <Search 
              size={16} 
              style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '50%', 
                transform: 'translateY(-50%)',
                color: '#666'
              }} 
            />
            <input
              type="text"
              placeholder="상품명으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '0.875rem'
              }}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '0.875rem',
              minWidth: '120px'
            }}
          >
            <option value="all">전체 카테고리</option>
            {categories.slice(1).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <button className="btn" style={{ background: '#6c757d', color: 'white' }}>
            <Filter size={16} />
            필터
          </button>
        </div>
      </div>

      {/* 상품 목록 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            상품 목록 ({filteredProducts.length}개)
          </h3>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>상품 정보</th>
                <th>카테고리</th>
                <th>가격</th>
                <th>재고</th>
                <th>판매량</th>
                <th>상태</th>
                <th>작업</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div 
                        style={{
                          width: '60px',
                          height: '60px',
                          background: '#f8f9fa',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Package size={24} color="#666" />
                      </div>
                      <div>
                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                          {product.name}
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#666' }}>
                          ID: {product.id}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td style={{ fontWeight: '600' }}>
                    ₩{product.price.toLocaleString()}
                  </td>
                  <td>
                    <span style={{ 
                      color: product.stock === 0 ? '#dc3545' : product.stock < 50 ? '#ffc107' : '#28a745',
                      fontWeight: '600'
                    }}>
                      {product.stock}개
                    </span>
                  </td>
                  <td>{product.sales}개</td>
                  <td>
                    <span className={`badge ${getStatusBadge(product.status)}`}>
                      {product.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button 
                        className="btn" 
                        style={{ 
                          background: 'transparent', 
                          border: '1px solid #ddd',
                          padding: '0.25rem 0.5rem'
                        }}
                        title="상세보기"
                        onClick={() => handleViewProduct(product)}
                      >
                        <Eye size={14} />
                      </button>
                      <button 
                        className="btn btn-primary" 
                        style={{ padding: '0.25rem 0.5rem' }}
                        title="수정"
                        onClick={() => handleEditProduct(product)}
                      >
                        <Edit size={14} />
                      </button>
                      <button 
                        className="btn btn-danger" 
                        style={{ padding: '0.25rem 0.5rem' }}
                        title="삭제"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem', 
            color: '#666' 
          }}>
            <Package size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
            <p>검색 조건에 맞는 상품이 없습니다.</p>
          </div>
        )}
      </div>

      {/* 빠른 통계 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {products.length}
          </h3>
          <p style={{ color: '#666' }}>총 상품 수</p>
        </div>
        
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#28a745', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {products.filter(p => p.status === '판매중').length}
          </h3>
          <p style={{ color: '#666' }}>판매중인 상품</p>
        </div>
        
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#dc3545', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {products.filter(p => p.stock === 0).length}
          </h3>
          <p style={{ color: '#666' }}>품절 상품</p>
        </div>
        
        <div className="card" style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#ffc107', fontSize: '2rem', marginBottom: '0.5rem' }}>
            {products.filter(p => p.stock > 0 && p.stock < 50).length}
          </h3>
          <p style={{ color: '#666' }}>재고 부족</p>
        </div>
      </div>

      {/* 상품 등록 모달 */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="새 상품 등록"
        size="medium"
      >
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              상품명 *
            </label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              placeholder="상품명을 입력하세요"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px'
              }}
            />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                카테고리 *
              </label>
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px'
                }}
              >
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                가격 *
              </label>
              <input
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                placeholder="가격을 입력하세요"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px'
                }}
              />
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              재고 수량 *
            </label>
            <input
              type="number"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
              placeholder="재고 수량을 입력하세요"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px'
              }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              상품 설명
            </label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              placeholder="상품 설명을 입력하세요"
              rows={3}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                resize: 'vertical'
              }}
            />
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button 
              className="btn btn-primary"
              onClick={handleAddProduct}
            >
              <Save size={16} />
              등록
            </button>
            <button 
              className="btn" 
              style={{ background: '#6c757d', color: 'white' }}
              onClick={() => setShowAddModal(false)}
            >
              <X size={16} />
              취소
            </button>
          </div>
        </div>
      </Modal>

      {/* 상품 수정 모달 */}
      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="상품 정보 수정"
        size="medium"
      >
        {selectedProduct && (
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                상품명 *
              </label>
              <input
                type="text"
                value={selectedProduct.name}
                onChange={(e) => setSelectedProduct({...selectedProduct, name: e.target.value})}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px'
                }}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  카테고리 *
                </label>
                <select
                  value={selectedProduct.category}
                  onChange={(e) => setSelectedProduct({...selectedProduct, category: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                >
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  가격 *
                </label>
                <input
                  type="number"
                  value={selectedProduct.price}
                  onChange={(e) => setSelectedProduct({...selectedProduct, price: parseInt(e.target.value)})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  재고 수량 *
                </label>
                <input
                  type="number"
                  value={selectedProduct.stock}
                  onChange={(e) => setSelectedProduct({...selectedProduct, stock: parseInt(e.target.value)})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  상태
                </label>
                <select
                  value={selectedProduct.status}
                  onChange={(e) => setSelectedProduct({...selectedProduct, status: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                >
                  <option value="판매중">판매중</option>
                  <option value="품절">품절</option>
                  <option value="판매중지">판매중지</option>
                </select>
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                상품 설명
              </label>
              <textarea
                value={selectedProduct.description || ''}
                onChange={(e) => setSelectedProduct({...selectedProduct, description: e.target.value})}
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button 
                className="btn btn-primary"
                onClick={handleUpdateProduct}
              >
                <Save size={16} />
                수정
              </button>
              <button 
                className="btn" 
                style={{ background: '#6c757d', color: 'white' }}
                onClick={() => setShowEditModal(false)}
              >
                <X size={16} />
                취소
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* 상품 상세 모달 */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        title="상품 상세 정보"
        size="medium"
      >
        {selectedProduct && (
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  background: '#f8f9fa',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Package size={32} color="#666" />
              </div>
              <div>
                <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>{selectedProduct.name}</h3>
                <span className={`badge ${getStatusBadge(selectedProduct.status)}`}>
                  {selectedProduct.status}
                </span>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#666' }}>
                  상품 ID
                </label>
                <p style={{ margin: 0 }}>{selectedProduct.id}</p>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#666' }}>
                  카테고리
                </label>
                <p style={{ margin: 0 }}>{selectedProduct.category}</p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#666' }}>
                  가격
                </label>
                <p style={{ margin: 0, fontWeight: '600', fontSize: '1.125rem', color: '#007bff' }}>
                  ₩{selectedProduct.price.toLocaleString()}
                </p>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#666' }}>
                  재고
                </label>
                <p style={{ 
                  margin: 0, 
                  fontWeight: '600',
                  color: selectedProduct.stock === 0 ? '#dc3545' : selectedProduct.stock < 50 ? '#ffc107' : '#28a745'
                }}>
                  {selectedProduct.stock}개
                </p>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#666' }}>
                  판매량
                </label>
                <p style={{ margin: 0, fontWeight: '600' }}>{selectedProduct.sales}개</p>
              </div>
            </div>
            
            {selectedProduct.description && (
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: '#666' }}>
                  상품 설명
                </label>
                <p style={{ margin: 0, lineHeight: '1.5' }}>{selectedProduct.description}</p>
              </div>
            )}
            
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setShowDetailModal(false);
                  handleEditProduct(selectedProduct);
                }}
              >
                <Edit size={16} />
                수정
              </button>
              <button 
                className="btn" 
                style={{ background: '#6c757d', color: 'white' }}
                onClick={() => setShowDetailModal(false)}
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Products;