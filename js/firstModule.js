import TypeIt from "typeit";

const subtitle = new TypeIt("#mainSubTitle",{
    speed:50,
    waitUntilVisible: true,
    afterComplete: () => {subtitle.destroy();}
}) .pause(1000)
    .type("Por: ")
    .pause(400)
    .type("Luis Felipe Linares Perdomo")
    .pause(100)
    .type(".")
    .pause(500)

const title = new TypeIt("#mainTitle",{
    speed:100,
    waitUntilVisible: true,
    afterComplete : (async () => {subtitle.go(); title.destroy();}),
})
    .type("Metricas", {delay: 300})
    .delete(7)
    .type("étricas ")
    .pause(300)
    .type("de calidad de hardware")
    .pause(500)
    .delete(8)
    .type("Software")
    .pause(350)
    .type(".")
    .pause(500)
    .go();

