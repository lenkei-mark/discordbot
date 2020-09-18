module.exports = {
    name: 'kopasz',
    description: 'kopasz szokásos beszólásai',
    run(message){
        let kopaszVocabulary = ["Kopasz: Szoble!", "Kopasz: Kurva anyad itta rendőrség", "Kopasz: HÁBORÚÚÚÚÚ!!!"];
        message.channel.send(kopaszVocabulary[Math.round(Math.random()*(kopaszVocabulary.length-1))]);
    }
}