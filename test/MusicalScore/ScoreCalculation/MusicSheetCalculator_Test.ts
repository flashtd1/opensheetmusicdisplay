/**
 * Created by Matthias on 21.06.2016.
 */
import {MusicSheetReader} from "../../../src/MusicalScore/ScoreIO/MusicSheetReader";
import {MusicSheet} from "../../../src/MusicalScore/MusicSheet";
import {IXmlElement} from "../../../src/Common/FileIO/Xml";
import {MusicSheetCalculator} from "../../../src/MusicalScore/Graphical/MusicSheetCalculator";
import {VexFlowMusicSheetCalculator} from "../../../src/MusicalScore/Graphical/VexFlow/VexFlowMusicSheetCalculator";
import {GraphicalMusicSheet} from "../../../src/MusicalScore/Graphical/GraphicalMusicSheet";
import {VexFlowTextMeasurer} from "../../../src/MusicalScore/Graphical/VexFlow/VexFlowTextMeasurer";
import {TestUtils} from "../../Util/TestUtils";


describe("Music Sheet Calculator Tests", () => {
    // Initialize variables
    let filename: string = "MuzioClementi_SonatinaOpus36No1_Part1";
    let reader: MusicSheetReader = new MusicSheetReader();
    let calculator: MusicSheetCalculator = new VexFlowMusicSheetCalculator();
    let score: IXmlElement;
    let sheet: MusicSheet;

    before((): void => {
        // ???
    });

    beforeEach((): void => {
        // ???
    });

    afterEach((): void => {
        // cleanup?
    });

    it("Do Calculation", (done: MochaDone) => {
        MusicSheetCalculator.TextMeasurer = new VexFlowTextMeasurer();
        // Load the XML file
        let xml: Document = TestUtils.getScore(filename);
        chai.expect(xml).to.not.be.undefined;
        score = new IXmlElement(TestUtils.getPartWiseElement(xml));
        chai.expect(score).to.not.be.undefined;
        sheet = reader.createMusicSheet(score, "path-of-" + filename);

        let graphicalSheet: GraphicalMusicSheet = new GraphicalMusicSheet(sheet, calculator);
        graphicalSheet.reCalculate();
        done();
    });
});
