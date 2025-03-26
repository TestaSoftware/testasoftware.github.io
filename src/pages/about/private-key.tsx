import { Container } from "../../components/Container.tsx";
import {Link} from "../../components/ui/link.tsx";

const PrivateKey = () => {
  return (
    <>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen></iframe>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <h2 className="text-4xl">Sorry... had to.</h2>
            <p>
              But seriously, you can still grab my public key if you'd like:
            </p>
            <p>
              <Link  href="/data/steve_testa.asc" download>Public Key</Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivateKey;