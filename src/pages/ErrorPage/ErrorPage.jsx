import ErrorImage from '../../assets/errorImg.png';

const ErrorPage = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <img className='h-[80vh]' src={ErrorImage} alt="Error 404 Image" />
        </div>
    );
}

export default ErrorPage;
