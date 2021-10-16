import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout"

interface UserIpInformationProps {
    ip: string;
    refresh: () => void;
}

export const UserIpInformation: React.FC<UserIpInformationProps> = (props) => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
                <Box alignItems="baseline" textStyle="paragraph">
                    <p>ip: {props.ip}</p>

                    <Button onClick={props.refresh} colorScheme="teal" marginTop="4">Update Information</Button>
                </Box>
            </Box>
        </Box>
    );
};