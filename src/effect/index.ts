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
    country: string;
};

const initialIpInformation: IpInformation = {
    country: "japan",
    ip: "1.1.1.1"
};

export const useIpInformation = (): UseIpInformationOutput => {
    const [ipInformation, setIpInformation] = useState<IpInformation>(initialIpInformation);

    const getIpInformation = useCallback( async () => {
        const ipInformation = await ((): Promise<IpInformation> => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        country: "USA",
                        ip: "2.2.2.2",
                    });
                }, 500);
            });
        })();

        setIpInformation(ipInformation);
    }, []);

    useEffect(() => {
        getIpInformation();
    }, []);

    return {
        state: {
            ipInformation
        },
        functions: {
            getIpInformation
        }
    }
}