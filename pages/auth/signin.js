import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//Browser
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center min-h-screen py-2 px-14 text-center -mt-20 items-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <p>This is Instagram ui for self project learning only</p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="bg-blue-400 rounded-lg text-white p-3"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//Server
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
