import { useRouter, useSearchParams } from "next/navigation";

const page = async () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');
    

}
export default page;