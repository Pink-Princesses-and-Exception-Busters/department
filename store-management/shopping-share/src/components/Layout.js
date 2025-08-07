import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Bell,
  User
} from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: '대시보드' },
    { path: '/products', icon: Package, label: '상품관리' },
    { path: '/orders', icon: ShoppingCart, label: '주문관리' },
    { path: '/customers', icon: Users, label: '고객관리' },
    { path: '/statistics', icon: BarChart3, label: '통계분석' },
    { path: '/settings', icon: Settings, label: '설정' },
  ];

  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">The Hyundai</h1>
          <p style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '0.5rem' }}>
            쇼핑몰 관리자
          </p>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon className="nav-icon" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-title">
            {menuItems.find(item => item.path === location.pathname)?.label || '대시보드'}
          </div>
          
          <div className="header-actions">
            <button className="btn" style={{ background: 'transparent', border: 'none' }}>
              <Bell size={20} />
            </button>
            
            <div className="user-info">
              <User size={20} />
              <span>관리자</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;