import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout"

export const UserIpInformation = () => {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="6">
                <Box alignItems="baseline" textStyle="paragraph">
                    <p>country: Japan</p>
                    <p>ip: 1.1.1.1</p>

                    <Button colorScheme="teal" marginTop="4">Update Information</Button>
                </Box>
            </Box>
        </Box>
    );
};