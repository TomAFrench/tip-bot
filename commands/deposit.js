module.exports = async (msg) => {
    let userAddress = await process.core.users.getAddress(msg.sender)

    if (!userAddress) {
        userAddress = await process.core.users.setAddress(msg.sender, await process.core.coin.createAddress(msg.sender));
    }

    msg.obj.reply(`Your reusable address is ${userAddress}!`);
};
