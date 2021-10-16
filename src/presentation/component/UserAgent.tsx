import { Box } from "@chakra-ui/layout"

interface UserAgentProps {
    userAgent: string;
}

export const UserAgent: React.FC<UserAgentProps> = (props) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
                <Box alignItems="baseline" textStyle="paragraph">
                    <p>userAgent: {props.userAgent}</p>
                </Box>
            </Box>
        </Box>
    )
}