import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const SupabaseTest = () => {
  const [connectionStatus, setConnectionStatus] = useState<string>('연결 확인 중...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Supabase 연결 테스트
        const { data, error } = await supabase
          .from('_test_table_that_does_not_exist')
          .select('*')
          .limit(1);

        if (error) {
          // 테이블이 존재하지 않는 에러는 정상적인 연결을 의미
          if (error.message.includes('does not exist') || 
              error.message.includes('schema cache') || 
              error.code === 'PGRST116') {
            setConnectionStatus('✅ Supabase 연결 성공! (데이터베이스 통신 정상)');
          } else {
            setConnectionStatus(`❌ 연결 오류: ${error.message}`);
          }
        } else {
          setConnectionStatus('✅ Supabase 연결 성공!');
        }
      } catch (err) {
        setConnectionStatus(`❌ 연결 실패: ${err}`);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Supabase 연결 상태</h3>
      <p className="text-sm">{connectionStatus}</p>
      <div className="mt-2 text-xs text-gray-600">
        <p>URL: {import.meta.env.VITE_SUPABASE_URL}</p>
        <p>API Key: {import.meta.env.VITE_SUPABASE_ANON_KEY ? '설정됨' : '설정되지 않음'}</p>
      </div>
    </div>
  );
};

export default SupabaseTest;