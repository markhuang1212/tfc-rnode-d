# TFC-Rnode-d

本程序在RNode/超级节点上运行，负责提供sector的提交和验证。

## 功能

1. 提供“提交sector信息到TFC-Chain和集群”的功能
2. （普通Rnode）监听链上的验证请求，在自己的sector需要被验证时，及时提交验证结果（proof）
3. （超级节点）监听链上的验证请求，在Tfc-Chain需要时帮助tfc-chain验证其他RNode提交的proof

## 配置

运行程序前需要在`src/Config.ts`中填入需要的变量内容。

## 具体API设计

### 提交sector到Tfc-Chain和集群

```ts
/**
 * 该函数将rnode上的sector提交到Tfc-Chain和集群中。
 * @params afid - 提交的sector的afid 
 * @params owner - sector拥有者的TfcAddress
 * @params private_key - sector拥有者的TfcAddress的私钥。用于向Tfc-Chain提交请求时签名
 * @throws 若操作失败则报错
 */
function uploadSector(afid: string, owner: string, private_key: string): void
```

使用命令行调用该函数：

```bash
yarn run submit-sector --afid="xxxxx" --location="xxxxx"
```

### 自动提交sector的proof

需要在`data/sectors.json`中填入改监听的sector afid，随后重启程序。程序会在需要提交验证时自动上传验证结果。

### 自动验证（链上所有）sector的proof

此功能不需要任何配置，程序运行时会自动验证链上的proof，并将结果提交给链。

## 程序运行需要的API

1. TfcChain中的`RNode Role`和`Verifier Role`。程序使用`@tfc-chain/adapter`与tfc-chain沟通
2. 向集群提交sector的函数`;_f=submit_sector;sector_afid=xxx;location=xxx;`
3. 生成sector验证结果（proof）的函数`;_f=generate_proof;sector_afid=xxx;check_afid=xxx;`
4. 验证其他RNode提交的proof的函数`;_f=verify_proof;proof_afid=xxx;check_afid=xxx;sector_afid=xxx;`
