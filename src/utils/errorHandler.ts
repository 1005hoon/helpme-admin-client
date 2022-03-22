const errorHandler = (error: any) => {
    if (error.response) {
        const { status, statusText } = error.response;

        if (status === 401) {
            return '인증 세션이 만료되었습니다. 다시 로그인 해주세요.';
        }
        return statusText as string;
    }

    if (error.request) {
        return '네트워크 요청에 실패했습니다. 담당자에게 문의주세요.';
    }

    return error.message as string;
};

export default errorHandler;
