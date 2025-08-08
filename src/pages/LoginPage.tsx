const LoginPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">로그인</h1>
        <div className="text-center py-8">
          <p className="text-gray-600">
            Supabase Auth 연동 후 로그인 기능이 활성화됩니다.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage