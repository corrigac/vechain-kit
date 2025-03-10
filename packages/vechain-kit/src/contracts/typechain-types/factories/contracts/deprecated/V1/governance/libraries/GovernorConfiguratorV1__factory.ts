/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  GovernorConfiguratorV1,
  GovernorConfiguratorV1Interface,
} from "../../../../../../contracts/deprecated/V1/governance/libraries/GovernorConfiguratorV1";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositThreshold",
        type: "uint256",
      },
    ],
    name: "GovernorDepositThresholdNotInRange",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDepositThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDepositThreshold",
        type: "uint256",
      },
    ],
    name: "DepositThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldMinMinVotingDelay",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newMinVotingDelay",
        type: "uint256",
      },
    ],
    name: "MinVotingDelaySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldTimelock",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newTimelock",
        type: "address",
      },
    ],
    name: "TimelockChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newContractAddress",
        type: "address",
      },
    ],
    name: "VoterRewardsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldVotingThreshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newVotingThreshold",
        type: "uint256",
      },
    ],
    name: "VotingThresholdSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldContractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newContractAddress",
        type: "address",
      },
    ],
    name: "XAllocationVotingSet",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6105a861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c8063233f232d146100715780637cdbd6fb146100935780639a5c19d5146100b3578063b68c069a146100d3578063cacd8701146100f3578063de60585e14610113575b600080fd5b81801561007d57600080fd5b5061009161008c366004610506565b610133565b005b81801561009f57600080fd5b506100916100ae366004610506565b61021a565b8180156100bf57600080fd5b506100916100ce366004610536565b610304565b8180156100df57600080fd5b506100916100ee366004610536565b61034a565b8180156100ff57600080fd5b5061009161010e366004610506565b610390565b81801561011f57600080fd5b5061009161012e366004610536565b610483565b6001600160a01b0381166101ac5760405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72436f6e666967757261746f723a2074696d656c6f636b20616044820152746464726573732063616e6e6f74206265207a65726f60581b60648201526084015b60405180910390fd5b60068201546040517f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401916101ed916001600160a01b03909116908490610558565b60405180910390a160069190910180546001600160a01b0319166001600160a01b03909216919091179055565b6001600160a01b0381166102965760405162461bcd60e51b815260206004820152603e60248201527f476f7665726e6f72436f6e666967757261746f723a2078416c6c6f636174696f60448201527f6e566f74696e6720616464726573732063616e6e6f74206265207a65726f000060648201526084016101a3565b600a8201546040517f71004d26dc692e8d5005fb307953a5ce05000120035aa3f83615abc6c6fbba2e916102d7916001600160a01b03909116908490610558565b60405180910390a1600a9190910180546001600160a01b0319166001600160a01b03909216919091179055565b601282015460408051918252602082018390527fa5b41e1bd59a5a33422f0b660829ff7686aed2198167061e3c6c21fdcc259f05910160405180910390a1601290910155565b600482015460408051918252602082018390527fd5fa2027382834080d1e011cda04312db2805a2069bb13475f4376e8d7c64668910160405180910390a1600490910155565b6001600160a01b0381166104085760405162461bcd60e51b815260206004820152603960248201527f476f7665726e6f72436f6e666967757261746f723a20766f7465725265776172604482015278647320616464726573732063616e6e6f74206265207a65726f60381b60648201526084016101a3565b7f285472e909a94733ed110e0aa70b4e9265635781731772845338790bd58d09c48260090160019054906101000a90046001600160a01b031682604051610450929190610558565b60405180910390a1600990910180546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b60648111156104a857604051631f04dde560e11b8152600481018290526024016101a3565b600e82015460408051918252602082018390527f4adda057a4d6f602c2963e19f830c187c77643eed431c07706d9dd8209ef5426910160405180910390a1600e90910155565b6001600160a01b038116811461050357600080fd5b50565b6000806040838503121561051957600080fd5b82359150602083013561052b816104ee565b809150509250929050565b6000806040838503121561054957600080fd5b50508035926020909101359150565b6001600160a01b039283168152911660208201526040019056fea2646970667358221220f86d2ce780b154508d9e2ea77e3ffcffaccd17fedd16386ab253c13e1e65d38b64736f6c63430008140033";

type GovernorConfiguratorV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernorConfiguratorV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernorConfiguratorV1__factory extends ContractFactory {
  constructor(...args: GovernorConfiguratorV1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      GovernorConfiguratorV1 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): GovernorConfiguratorV1__factory {
    return super.connect(runner) as GovernorConfiguratorV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernorConfiguratorV1Interface {
    return new Interface(_abi) as GovernorConfiguratorV1Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GovernorConfiguratorV1 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as GovernorConfiguratorV1;
  }
}
