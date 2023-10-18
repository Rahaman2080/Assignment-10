import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="grid justify-center items-center max-w-5xl mx-auto mt-28 text-center">
            <h1>Data Not Found</h1>
            <Link to={'/'}>
                <button className="mt-4 btn btn-secondary font-bold">go home</button></Link>
        </div>
    );
};

export default ErrorPage;