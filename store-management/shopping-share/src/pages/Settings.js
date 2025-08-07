import React, { useState } from 'react';
import {
  Save,
  User,
  Store,
  CreditCard,
  Truck,
  Bell,
  Shield,
  Globe,
  Mail,
  Smartphone,
  Package
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('store');
  const [settings, setSettings] = useState({
    store: {
      name: '현대백화점 스토어',
      description: '고품질 제품을 합리적인 가격에 제공하는 온라인 쇼핑몰입니다.',
      phone: '02-1234-5678',
      email: 'contact@thehyundai.co.kr',
      businessNumber: '123-45-67890',
      ceoName: '홍길동',
      address: '서울특별시 강남구 테헤란로 123'
    },
    payment: {
      methods: {
        creditCard: true,
        bankTransfer: true,
        virtualAccount: true,
        kakaoPay: false,
        naverPay: false,
        paypal: false
      },
      pgCompany: 'KG이니시스',
      storeId: '',
      storeKey: ''
    },
    shipping: {
      basicFee: 3000,
      freeShippingAmount: 50000,
      jejuExtraFee: true,
      couriers: {
        cj: true,
        hanjin: true,
        logen: false,
        post: true
      }
    },
    notifications: {
      newOrder: true,
      paymentComplete: true,
      lowStock: true,
      customerInquiry: false,
      smsAlert: false
    }
  });

  const tabs = [
    { id: 'store', label: '쇼핑몰 설정', icon: Store },
    { id: 'payment', label: '결제 설정', icon: CreditCard },
    { id: 'shipping', label: '배송 설정', icon: Truck },
    { id: 'notification', label: '알림 설정', icon: Bell },
    { id: 'security', label: '보안 설정', icon: Shield },
    { id: 'account', label: '계정 설정', icon: User }
  ];

  // 설정 업데이트 함수들
  const updateStoreSetting = (field, value) => {
    setSettings(prev => ({
      ...prev,
      store: { ...prev.store, [field]: value }
    }));
  };

  const updatePaymentSetting = (field, value) => {
    setSettings(prev => ({
      ...prev,
      payment: { ...prev.payment, [field]: value }
    }));
  };

  const updatePaymentMethod = (method, enabled) => {
    setSettings(prev => ({
      ...prev,
      payment: {
        ...prev.payment,
        methods: { ...prev.payment.methods, [method]: enabled }
      }
    }));
  };

  const updateShippingSetting = (field, value) => {
    setSettings(prev => ({
      ...prev,
      shipping: { ...prev.shipping, [field]: value }
    }));
  };

  const updateCourierSetting = (courier, enabled) => {
    setSettings(prev => ({
      ...prev,
      shipping: {
        ...prev.shipping,
        couriers: { ...prev.shipping.couriers, [courier]: enabled }
      }
    }));
  };

  const updateNotificationSetting = (field, enabled) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [field]: enabled }
    }));
  };

  const handleSaveSettings = () => {
    // 실제로는 서버에 저장하는 API 호출
    localStorage.setItem('shopSettings', JSON.stringify(settings));
    alert('설정이 성공적으로 저장되었습니다.');
  };

  const StoreSettings = () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">기본 정보</h3>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              쇼핑몰 이름
            </label>
            <input
              type="text"
              value={settings.store.name}
              onChange={(e) => updateStoreSetting('name', e.target.value)}
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
              쇼핑몰 설명
            </label>
            <textarea
              value={settings.store.description}
              onChange={(e) => updateStoreSetting('description', e.target.value)}
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                대표 전화번호
              </label>
              <input
                type="tel"
                value={settings.store.phone}
                onChange={(e) => updateStoreSetting('phone', e.target.value)}
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
                대표 이메일
              </label>
              <input
                type="email"
                value={settings.store.email}
                onChange={(e) => updateStoreSetting('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">사업자 정보</h3>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                사업자등록번호
              </label>
              <input
                type="text"
                value={settings.store.businessNumber}
                onChange={(e) => updateStoreSetting('businessNumber', e.target.value)}
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
                대표자명
              </label>
              <input
                type="text"
                value={settings.store.ceoName}
                onChange={(e) => updateStoreSetting('ceoName', e.target.value)}
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
              사업장 주소
            </label>
            <input
              type="text"
              value={settings.store.address}
              onChange={(e) => updateStoreSetting('address', e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const PaymentSettings = () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">결제 수단</h3>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { name: '신용카드', enabled: true },
            { name: '계좌이체', enabled: true },
            { name: '무통장입금', enabled: true },
            { name: '카카오페이', enabled: false },
            { name: '네이버페이', enabled: false },
            { name: '페이팔', enabled: false }
          ].map((method, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <span style={{ fontWeight: '600' }}>{method.name}</span>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  defaultChecked={method.enabled}
                  style={{ transform: 'scale(1.2)' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#666' }}>
                  {method.enabled ? '사용중' : '사용안함'}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">PG사 설정</h3>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              PG사 선택
            </label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '6px'
            }}>
              <option>KG이니시스</option>
              <option>NHN KCP</option>
              <option>토스페이먼츠</option>
              <option>나이스페이</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                상점 ID
              </label>
              <input
                type="text"
                placeholder="상점 ID를 입력하세요"
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
                상점 키
              </label>
              <input
                type="password"
                placeholder="상점 키를 입력하세요"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '6px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ShippingSettings = () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">배송비 설정</h3>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                기본 배송비
              </label>
              <input
                type="number"
                defaultValue="3000"
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
                무료배송 기준금액
              </label>
              <input
                type="number"
                defaultValue="50000"
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
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              <span>제주/도서산간 추가 배송비 적용</span>
            </label>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">택배사 설정</h3>
        </div>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            { name: 'CJ대한통운', code: 'CJ', enabled: true },
            { name: '한진택배', code: 'HANJIN', enabled: true },
            { name: '로젠택배', code: 'LOGEN', enabled: false },
            { name: '우체국택배', code: 'POST', enabled: true }
          ].map((courier, index) => (
            <div key={index} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>{courier.name}</div>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>
                  코드: {courier.code}
                </div>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  defaultChecked={courier.enabled}
                  style={{ transform: 'scale(1.2)' }}
                />
                <span style={{ fontSize: '0.875rem', color: '#666' }}>
                  {courier.enabled ? '사용중' : '사용안함'}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">알림 설정</h3>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {[
          { title: '새 주문 알림', desc: '새로운 주문이 들어올 때 알림을 받습니다', icon: Bell, enabled: true },
          { title: '결제 완료 알림', desc: '결제가 완료될 때 알림을 받습니다', icon: CreditCard, enabled: true },
          { title: '재고 부족 알림', desc: '상품 재고가 부족할 때 알림을 받습니다', icon: Package, enabled: true },
          { title: '고객 문의 알림', desc: '고객 문의가 등록될 때 알림을 받습니다', icon: Mail, enabled: false },
          { title: 'SMS 알림', desc: '중요한 알림을 SMS로 받습니다', icon: Smartphone, enabled: false }
        ].map((notification, index) => {
          const Icon = notification.icon;
          return (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: notification.enabled ? '#007bff' : '#6c757d',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                <Icon size={20} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
                  {notification.title}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#666' }}>
                  {notification.desc}
                </div>
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  defaultChecked={notification.enabled}
                  style={{ transform: 'scale(1.2)' }}
                />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'store': return <StoreSettings />;
      case 'payment': return <PaymentSettings />;
      case 'shipping': return <ShippingSettings />;
      case 'notification': return <NotificationSettings />;
      case 'security':
        return (
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">보안 설정</h3>
            </div>
            <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>
              보안 설정 기능은 준비 중입니다.
            </p>
          </div>
        );
      case 'account':
        return (
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">계정 설정</h3>
            </div>
            <p style={{ color: '#666', textAlign: 'center', padding: '2rem' }}>
              계정 설정 기능은 준비 중입니다.
            </p>
          </div>
        );
      default: return <StoreSettings />;
    }
  };

  return (
    <div>
      {/* 탭 네비게이션 */}
      <div className="card">
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          borderBottom: '1px solid #eee',
          paddingBottom: '1rem',
          marginBottom: '1rem',
          flexWrap: 'wrap'
        }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`btn ${activeTab === tab.id ? 'btn-primary' : ''}`}
                style={activeTab !== tab.id ? {
                  background: 'transparent',
                  color: '#666',
                  border: '1px solid #ddd'
                } : {}}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 탭 컨텐츠 */}
      {renderTabContent()}

      {/* 저장 버튼 */}
      <div style={{
        position: 'sticky',
        bottom: '2rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <button
          className="btn btn-primary"
          style={{ padding: '0.75rem 2rem' }}
          onClick={handleSaveSettings}
        >
          <Save size={16} />
          설정 저장
        </button>
      </div>
    </div>
  );
};

export default Settings;