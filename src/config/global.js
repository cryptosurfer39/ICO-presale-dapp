import { BNBchain, BNBchain } from "wagmi/chains";
import rpls_ic from "../assets/img/rpls.png"
import pls_ic from "../assets/img/pulse.png"
import dai_ic from "../assets/img/dai.png"
import usdc_ic from "../assets/img/usdc.png"
import usdt_ic from "../assets/img/usdt.svg"

export const IS_PRODUCT_MODE = false // TODO

export const contracts_mainnet = { // TODO BNBchain Mainnet
    Main: "0x64503a4bfc817D6166cA6DEAA6aA23773d2f51d4",
};

export const contracts_testnet = { // TODO BNBchain Testnet
    Main: "0xFfA4D3f3cA53EeaF02BBa43C0E3F6c9aa8717B1a",
};

export const projectToken_mainnet = {
    name: 'USDT',
    address: '0x64503a4bfc817D6166cA6DEAA6aA23773d2f51d4',
    decimals: 18,
    logo: rpls_ic,
    isNative: true
}

export const projectToken_testnet = {
    name: 'USDT',
    address: '0xFfA4D3f3cA53EeaF02BBa43C0E3F6c9aa8717B1a',
    decimals: 18,
    logo: rpls_ic,
    isNative: true
}

export const tokens_mainnet = [
    {
        name: 'USDT',
        address: '0x64503a4bfc817D6166cA6DEAA6aA23773d2f51d4',
        decimals: 18,
        logo: pls_ic,
        isNative: true
    },
    {
        name: 'DAI',
        address: '0xefd766ccb38eaf1dfd701853bfce31359239f305',
        decimals: 18,
        logo: dai_ic,
        isNative: false
    },
    {
        name: 'USDC',
        address: '0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07',
        decimals: 6,
        logo: usdc_ic,
        isNative: false
    },
    {
        name: 'USDT',
        address: '0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    }
]

export const tokens_testnet = [
    {
        name: 'USDT',
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        logo: pls_ic,
        isNative: true
    },
    {
        name: 'DAI',
        address: '0x5e1100ea18F918a4e9AB70694c6c554e1E940D32',
        decimals: 18,
        logo: dai_ic,
        isNative: false
    },
    {
        name: 'USDC',
        address: '0x38AcAA98Db174cEE218A33635322C19cC1155d20',
        decimals: 6,
        logo: usdc_ic,
        isNative: false
    },
    {
        name: 'USDT',
        address: '0xEe8d287B844959ADe40d718Dc23077ba920e2f07',
        decimals: 6,
        logo: usdt_ic,
        isNative: false
    }
]

export const global = {
    CONTRACTS: IS_PRODUCT_MODE ? contracts_mainnet : contracts_testnet,
    TOKENS: IS_PRODUCT_MODE ? tokens_mainnet : tokens_testnet,
    PROJECT_TOKEN: IS_PRODUCT_MODE ? projectToken_mainnet : projectToken_testnet,
    chain: IS_PRODUCT_MODE ? BNBchain : BNBchain,
    defaultGas: IS_PRODUCT_MODE ? 1000 : 0.1,
    REFETCH_INTERVAL: 30000,
    usdDecimals: 6,
    totalRounds: 24,
    totalVolume: 60_000_000,
}
