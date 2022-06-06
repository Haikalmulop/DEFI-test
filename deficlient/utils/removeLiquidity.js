import {Contract, provider, utils, BigNumber } from "ethers";
import { EXCHANGE_CONTRACT_ABI, EXCHANGE_CONTRACT_ADDRESS } from "../constants";

export const removeLiquidity = async (signer, removeLPTokensWei) => {
    const exchangeContract = new Contract(EXCHANGE_CONTRACT_ADDRESS, EXCHANGE_CONTRACT_ABI, signer);
    const tx = await exchangeContract.removeLiquidity(removeLPTokensWei);
    return tx.wait;
}

export const getTokensAfterRemove = async(provider, removeLPTokensWei, _ethBalance, cryptoDevTokenReserve) => {
    try{
        const exchangeContract = new Contract(EXCHANGE_CONTRACT_ABI, EXCHANGE_CONTRACT_ADDRESS, provider);
        const _totalSupply = await exchangeContract.tokenSupply();
        const _removeEther = ethBalance.mul(removeLPTokensWei).div(_totalSupply);
        const _removeCD = cryptoDevTokenReserve.mul(removeLPTokensWei).div(_totalSupply);
        return { _removeEther, _removeCD };
    }catch(err) {
        console.error(err);
    }
};