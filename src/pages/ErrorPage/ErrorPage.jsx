import { Helmet } from 'react-helmet-async';
import ErrorImage from '../../assets/errorImg.png';

const ErrorPage = () => {
    return (
        <div className='animate__animated animate__fadeIn w-screen h-screen flex justify-center items-center'>
            <Helmet>
                <title>404! Page Not Found</title>
            </Helmet>
            <img className='h-[80vh]' src={ErrorImage} alt="Error 404 Image" />
        </div>
    );
}

export default ErrorPage;
