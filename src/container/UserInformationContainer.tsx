import { useIpInformation } from "../effect/useUserIp"
import { UserIpInformation } from "../presentation/component/UserIpInformation"

import { useUserAgent } from "../effect/useUserAgent";
import { UserAgent } from "../presentation/component/UserAgent";

export const UserInformationContainer = () => {
    const { state: { ipInformation }, functions } = useIpInformation();
    const { state: { userAgent } } = useUserAgent();

    console.log("UserInformationContainer rendering");

    return (
        <>
            <UserIpInformation ip={ipInformation.ip} refresh={functions.getIpInformation} />
            <UserAgent userAgent={userAgent} />
        </>
    )
}