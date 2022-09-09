import {AccountLayout, TOKEN_PROGRAM_ID} from "@solana/spl-token";
import {clusterApiUrl, Connection, PublicKey} from "@solana/web3.js";
import { MarketplaceProviders } from "@strata-foundation/marketplace-ui";
import { usePublicKey, Swap } from "@strata-foundation/react";
import { CSSReset } from "@chakra-ui/react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import ReactShadow from "react-shadow/emotion";
const web3 = require('@solana/web3.js');
const fs = require('fs');