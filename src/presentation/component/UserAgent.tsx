import { Box } from "@chakra-ui/layout"
import { memo } from "react";

interface UserAgentProps {
    userAgent: string;
}

export const UserAgent: React.FC<UserAgentProps> = memo((props) => {
    console.log("UserAgentComponent rendering");
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
                <Box alignItems="baseline" textStyle="paragraph">
                    <p>userAgent: {props.userAgent}</p>
                </Box>
            </Box>
        </Box>
    )
});