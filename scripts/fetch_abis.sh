#!/bin/bash

set -ex

mkdir -p tmp_abis
cd tmp_abis

echo "Fetching latest Diesel v1 core and periphery sources"
git clone git@github.com:diesel-amm/diesel-v1-core.git
git clone git@github.com:diesel-amm/diesel-v1-periphery.git

echo "Building Diesel v1 core and periphery"

cd diesel-v1-core
git checkout mainnet-deployment
forc build --release

cd ../..

pnpm fuels build --deploy

rm -rf sway_abis

mkdir -p sway_abis/contracts/diesel_amm_contract
mkdir -p sway_abis/scripts/add_liquidity_script
mkdir -p sway_abis/scripts/create_pool_and_add_liquidity_script
mkdir -p sway_abis/scripts/remove_liquidity_script
mkdir -p sway_abis/scripts/swap_exact_input_script
mkdir -p sway_abis/scripts/swap_exact_output_script

mv -f tmp_abis/diesel-v1-core/contracts/diesel_amm_contract/out/release/ sway_abis/contracts/diesel_amm_contract

mv -f tmp_abis/diesel-v1-periphery/scripts/add_liquidity_script/out/release/ sway_abis/scripts/add_liquidity_script
mv -f tmp_abis/diesel-v1-periphery/scripts/add_liquidity_script/out/add_liquidity_script* sway_abis/scripts/add_liquidity_script/release

mv -f tmp_abis/diesel-v1-periphery/scripts/create_pool_and_add_liquidity_script/out/release/ sway_abis/scripts/create_pool_and_add_liquidity_script
mv -f tmp_abis/diesel-v1-periphery/scripts/create_pool_and_add_liquidity_script/out/create_pool_and_add_liquidity_script* sway_abis/scripts/create_pool_and_add_liquidity_script/release

mv -f tmp_abis/diesel-v1-periphery/scripts/remove_liquidity_script/out/release/ sway_abis/scripts/remove_liquidity_script
mv -f tmp_abis/diesel-v1-periphery/scripts/remove_liquidity_script/out/remove_liquidity_script* sway_abis/scripts/remove_liquidity_script/release

mv -f tmp_abis/diesel-v1-periphery/scripts/swap_exact_output_script/out/release/ sway_abis/scripts/swap_exact_output_script
mv -f tmp_abis/diesel-v1-periphery/scripts/swap_exact_output_script/out/swap_exact_output_script* sway_abis/scripts/swap_exact_output_script/release

mv -f tmp_abis/diesel-v1-periphery/scripts/swap_exact_input_script/out/release sway_abis/scripts/swap_exact_input_script
mv -f tmp_abis/diesel-v1-periphery/scripts/swap_exact_input_script/out/swap_exact_input_script* sway_abis/scripts/swap_exact_input_script/release


rm -rf tmp_abis

pnpm fuels typegen -i sway_abis/contracts/*/release/*-abi.json -o ./src/sdk/typegen --contract

pnpm fuels typegen -i sway_abis/scripts/*/release/*-abi.json -o ./src/sdk/typegen --script
