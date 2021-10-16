import { useCallback, useEffect, useState } from "react"

interface UseIpInformationOutput {
    state: {
        ipInformation: IpInformation;
    },
    functions: {
        getIpInformation: () => void;
    }
}

// Main Process側の型定義に依存することなく、effect側でinvokeElectronを実行後取得できる型定義を定義すること
type IpInformation = {
    ip: string;
};

type ApiResponse = {
    origin: string;
}

const initialIpInformation: IpInformation = {
    ip: ""
};

export const useIpInformation = (): UseIpInformationOutput => {
    const [ipInformation, setIpInformation] = useState<IpInformation>(initialIpInformation);

    console.log("useIpInformation rendering", JSON.stringify(ipInformation));

    const getIpInformation = useCallback(async () => {
        const response = await fetch("http://httpbin.org/get");
        const responseBody = (await response.json()) as ApiResponse;

        console.log("execute to get ip information", responseBody);

        setIpInformation({
            ip: responseBody.origin
        });
    }, []);

    useEffect(() => {
        getIpInformation();
    }, [getIpInformation]);

    return {
        state: {
            ipInformation
        },
        functions: {
            getIpInformation
        }
    }
}