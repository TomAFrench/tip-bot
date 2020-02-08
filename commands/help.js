// Get variables from the settings.
var bot = process.env.BOT_USER;
var symbol = process.settings.coin.symbol;
var decimals = process.settings.coin.decimals;
var fee = process.settings.coin.withdrawFee;

// Default help text.
var help = `
**TIPBOT COMMAND LIST**

To run a command, either preface it with "!" ("!deposit", "!tip") or ping the bot ("<@${bot}> deposit", "<@${bot}> tip").

This bot does use decimals, and has ${decimals} decimals of accuracy. You can also use "all" instead of any AMOUNT to tip/withdraw your entire balance.

-- *!balance*
Prints your balance.

-- *!tip <@PERSON> <AMOUNT>*
Tips the person that amount of ${symbol}.

-- *!withdraw <AMOUNT> <ADDRESS>*
Withdraws AMOUNT to ADDRESS, charging a ${fee} ${symbol} fee.

-- *!deposit*
Prints your personal deposit address.

If you have any questions, feel free to ask <@196722506676174848>.

This bot is fully open source and available at https://github.com/TomAFrench/tip-bot.
`;

module.exports = async (msg) => {
    msg.obj.author.send({
        embed: {
            description: help
        }
    });
};
