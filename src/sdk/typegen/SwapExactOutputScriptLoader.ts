/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
  StrSlice,
} from 'fuels';

import type { Enum, Vec } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;

export type SwapExactOutputScriptLoaderInputs = [amount_out: BigNumberish, asset_out: AssetIdInput, amount_in_max: BigNumberish, pools: Vec<[AssetIdInput, AssetIdInput, boolean]>, recipient: IdentityInput, deadline: BigNumberish];
export type SwapExactOutputScriptLoaderOutput = Vec<[BN, AssetIdOutput]>;

export type SwapExactOutputScriptLoaderConfigurables = Partial<{
  AMM_CONTRACT_ID: ContractIdInput;
}>;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "(struct std::asset_id::AssetId, struct std::asset_id::AssetId, bool)",
      "concreteTypeId": "a95e1fcceb1451b8a76471f593f66c4a52ca04bde3c227c746ad7aaf988de5c6",
      "metadataTypeId": 1
    },
    {
      "type": "(u64, struct std::asset_id::AssetId)",
      "concreteTypeId": "e10d8bfc338a29565debd72645b365f9b0481e462fd7d591848de4a73223d58d",
      "metadataTypeId": 0
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 4
    },
    {
      "type": "str",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    },
    {
      "type": "struct std::asset_id::AssetId",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "metadataTypeId": 8
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 9
    },
    {
      "type": "struct std::vec::Vec<(struct std::asset_id::AssetId, struct std::asset_id::AssetId, bool)>",
      "concreteTypeId": "a5cbfec6a05585025be4180a09c2bd7944724d54ac729c9bebe421d061ee5378",
      "metadataTypeId": 11,
      "typeArguments": [
        "a95e1fcceb1451b8a76471f593f66c4a52ca04bde3c227c746ad7aaf988de5c6"
      ]
    },
    {
      "type": "struct std::vec::Vec<(u64, struct std::asset_id::AssetId)>",
      "concreteTypeId": "6f03bcbe6f8a1e01b5dcb5701ab21443606d1b323a888ead4e9a2ecda650ae2e",
      "metadataTypeId": 11,
      "typeArguments": [
        "e10d8bfc338a29565debd72645b365f9b0481e462fd7d591848de4a73223d58d"
      ]
    },
    {
      "type": "u32",
      "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "(_, _)",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "__tuple_element",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "__tuple_element",
          "typeId": 8
        }
      ]
    },
    {
      "type": "(_, _, _)",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "__tuple_element",
          "typeId": 8
        },
        {
          "name": "__tuple_element",
          "typeId": 8
        },
        {
          "name": "__tuple_element",
          "typeId": 3
        }
      ]
    },
    {
      "type": "b256",
      "metadataTypeId": 2
    },
    {
      "type": "bool",
      "metadataTypeId": 3
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "Address",
          "typeId": 7
        },
        {
          "name": "ContractId",
          "typeId": 9
        }
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 5
    },
    {
      "type": "raw untyped ptr",
      "metadataTypeId": 6
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "bits",
          "typeId": 2
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "bits",
          "typeId": 2
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "bits",
          "typeId": 2
        }
      ]
    },
    {
      "type": "struct std::vec::RawVec",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "ptr",
          "typeId": 6
        },
        {
          "name": "cap",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "type": "struct std::vec::Vec",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "buf",
          "typeId": 10,
          "typeArguments": [
            {
              "name": "",
              "typeId": 5
            }
          ]
        },
        {
          "name": "len",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "typeParameters": [
        5
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "amount_out",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "asset_out",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "amount_in_max",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "pools",
          "concreteTypeId": "a5cbfec6a05585025be4180a09c2bd7944724d54ac729c9bebe421d061ee5378"
        },
        {
          "name": "recipient",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "deadline",
          "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
        }
      ],
      "name": "main",
      "output": "6f03bcbe6f8a1e01b5dcb5701ab21443606d1b323a888ead4e9a2ecda650ae2e",
      "attributes": null
    }
  ],
  "loggedTypes": [
    {
      "logId": "10098701174489624218",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "AMM_CONTRACT_ID",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "offset": 88
    }
  ]
};

const bytecode = decompressBytecode('H4sIAAAAAAAAA5NyMGAIcGQwkHIJYNjlycBg5MDSCOQrxALZQJoDyG9ScBVmCHIVYPFyYWBwSq/euVdsBd8z59qYxeUau9U4+VfE7b25+Kygwpcnl6xLGMCAqQNC4wf/gcAlNTElJzMvVaEgsbg4NYUhKL+0JLXISsHTL8zRx9MlPsAxxAOkNi01tZgYMwvy83Pic1NLElMSSxKB/AAgXyEvv0ShoCi1ODUP6j5cQF3AtSI5NTUlMy9dITOvoLREITE3vxSkq7g8sQDmZhA4AwYMTBAeA2OP6mmzNje9WVA+IcCIS4L3wbbNy1MI6meGUPbAGAHTPlA6BkLbQP1pPQFCG16B0DosEFr7CYTWmAHzN4SWnwKhBZZAaWg8CkRAaRMoDVXP/wBK20BpqDjfHSi9A0LzbIHSUP3cUPdwa0Borg9Q+gKUhqrngrqHE6qPE0IxcELdxXEEQrND7WdLgNCsC6A0CwDJwp/j4AIAAA==');

export class SwapExactOutputScriptLoader extends Script<SwapExactOutputScriptLoaderInputs, SwapExactOutputScriptLoaderOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
