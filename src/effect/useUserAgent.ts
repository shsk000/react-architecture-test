import { useCallback, useEffect, useState } from "react"

interface UseUserAgentOutput {
    state: {
        userAgent: string;
    }
}

type ApiResponse = {
    "user-agent": string;
}

const initialUserAgent = "";

export const useUserAgent = (): UseUserAgentOutput => {
    const [userAgent, setUserAgent] = useState<string>(initialUserAgent);

    console.log("useUserAgent rendering", userAgent);

    const getUserAgent = useCallback(async () => {
        const response = await fetch("http://httpbin.org/user-agent");
        const responseBody = (await response.json()) as ApiResponse;

        console.log("execute to get userAgent", responseBody);

        setUserAgent(responseBody["user-agent"]);
    }, []);

    useEffect(() => {
        getUserAgent();
    }, [getUserAgent]);

    return {
        state: {
            userAgent
        },
    }
}