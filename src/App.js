import { React, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
	Flex,
	Text,
  	Image,
  	ChakraProvider,
	Spinner,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import Landing from "./landing";
import Defi from "./defi";

function App() {
	return (
		<ChakraProvider>
			<Flex w="100%" minHeight="100vh" direction="column">
				<Router>
					<Switch>
						<Route path="/" component={Landing} exact />
						<Route path="/defillama-chains" component={Defi} />
						<Route component={Landing} />
					</Switch>
				</Router>
			</Flex>
		</ChakraProvider>
	)
}

export default App;
