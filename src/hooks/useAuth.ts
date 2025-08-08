import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { setUser, logout, setLoading } from '../store/slices/userSlice';
import axiosInstance from '../utils/axios';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, loading } = useAppSelector((state) => state.user);
  const [error, setError] = useState<string | null>(null);

  const login = async (data: LoginData) => {
    try {
      dispatch(setLoading(true));
      setError(null);
      
      const response = await axiosInstance.post('/auth/login', data);
      const { user, token } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(user));
      dispatch(setUser(user));
      
      return { success: true };
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || '로그인에 실패했습니다.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  };

  const register = async (data: RegisterData) => {
    try {
      dispatch(setLoading(true));
      setError(null);
      
      const response = await axiosInstance.post('/auth/register', data);
      const { user, token } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('userData', JSON.stringify(user));
      dispatch(setUser(user));
      
      return { success: true };
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || '회원가입에 실패했습니다.';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      dispatch(setLoading(false));
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout: logoutUser,
  };
};