import Image from "next/image";

function Login(){
    return (
        <div className="gris place-items-center">
        <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        />
        <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white texxt-cente curser-pointer"> Login with Facebook

        </h1>
        </div>

    );
}

export default Login;