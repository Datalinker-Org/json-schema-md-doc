 - <b id="#/properties/animalIdentifiers">animalIdentifiers</b>
	 - **Description:** URN identifier of an externally meaningful ID such as birthTag,currentTag, birthHerdCode etc
	 - **Type:** `array`
	 - <b id="animalidentifiermerits_traits_and_sessionsanimalidentifier.md">Link to schema: [AnimalIdentifier](Merits_Traits_and_Sessions/AnimalIdentifier.md)</b>
 - <b id="#/properties/carcassId">carcassId</b>
	 - **Description:** Identifier assigned to carcass by processor
	 - **Type:** `string`
 - <b id="#/properties/sex">sex</b>
	 - **Description:** The gender or sex of the animal. This may be combined with state information to indicate the fertility status of the animal. Enumeration: M(Male), F(Female), NULL  for unknowns.
	 - **Type:** `string`
 - <b id="#/properties/fertilityStatus">fertilityStatus</b>
	 - **Description:** Indicates whether an animal is known to be fertile or not, or whether it has been partly or fully neutered. For instance, a neutered cattle male is a steer, a neutered sheep male is a wether. Females of both species can be spayed. An infertile male by comparison still has testes and responds as a male, and is frequently used as a 'teaser'. Enumeration: Fertile, Infertile, Neutered, Cryptorchid, Unknown
	 - **Type:** `string`
 - <b id="#/properties/sides">sides</b>
	 - **Description:** The carcass 'side' as determined by the processor. An animal can therefore have multiple sides for the same carcass. For example, cattle carcasses are split into two individual sides with individual characteristics. Numbered from 0 - 3 where 0 = whole
	 - **Type:** `array`
	 - <b id="carcasssidecarcassside.md">Link to schema: [CarcassSide](CarcassSide.md)</b>
 - <b id="#/properties/weight">weight</b>
	 - **Description:** Live animal weight prior to slaughter in kg. In this context, this weight typically includes the fresh liveweight recorded straight after removing from pasture, or the empty liveweight, recorded after a longer period when the stomach is empty
	 - **Type:** `number`
 - <b id="#/properties/deadWeight">deadWeight</b>
	 - **Description:** Weight in kg of an animal before cutting
	 - **Type:** `number`
 - <b id="#/properties/carcassGrade">carcassGrade</b>
	 - **Description:** Pricing Category for carcass determined by Processor
	 - **Type:** `string`
 - <b id="#/properties/grFatDepth">grFatDepth</b>
	 - **Description:** Depth of fat in mm at the GR measurement site
	 - **Type:** `number`
 - <b id="#/properties/fatGrade">fatGrade</b>
	 - **Description:** Species-specific coding of fat grade at plant
	 - **Type:** `string`
 - <b id="#/properties/conformationGrade">conformationGrade</b>
	 - **Description:** Species-specific coding of conformation at plant
	 - **Type:** `string`
 - <b id="#/properties/meatColor">meatColor</b>
	 - **Description:** From 1 (pink) to 7 (dark maroon)
	 - **Type:** `string`
 - <b id="#/properties/fatColor">fatColor</b>
	 - **Description:** From 1 (pure white) to 7 (creamy yellow)
	 - **Type:** `string`
 - <b id="#/properties/marbling">marbling</b>
	 - **Description:** Intramuscular fat score, from 1 (lean) to 7 (High marbling)
	 - **Type:** `string`
 - <b id="#/properties/emaA">emaA</b>
	 - **Description:** Eye Muscle Dimension A (mm)
	 - **Type:** `number`
 - <b id="#/properties/emaB">emaB</b>
	 - **Description:** Eye Muscle Dimension B (mm)
	 - **Type:** `number`
 - <b id="#/properties/emaC">emaC</b>
	 - **Description:** Eye Muscle Dimension C (mm)
	 - **Type:** `number`
 - <b id="#/properties/emaUltrasound">emaUltrasound</b>
	 - **Description:** Eye Muscle Area Ultrasound; in cm2
	 - **Type:** `number`
 - <b id="#/properties/pH">pH</b>
	 - **Description:** pH measurement
	 - **Type:** `number`
 - <b id="#/properties/maturityAssessed">maturityAssessed</b>
	 - **Description:** URN identifier of an externally meaningful ID such as birthTag,currentTag, birthHerdCode etc
	 - **Type:** `string`
 - <b id="#/properties/dentition">dentition</b>
	 - **Description:** Dentition of carcass. Valid values: NULL (Unknown),Lamb, Mutton, Two-tooth, Four-tooth, Six-tooth, Full-mouth
	 - **Type:** `string`
 - <b id="#/properties/carcassYield">carcassYield</b>
	 - **Description:** Describes details about the meat yield
	 - **Type:** `object`
	 - <b id="carcassyieldcarcassyield.md">Link to schema: [CarcassYield](CarcassYield.md)</b>
 - <b id="#/properties/faults">faults</b>
	 - **Description:** Describes primary faults in the carcass assessed by the processor
	 - **Type:** `array`
	 - <b id="carcassfaultcarcassfault.md">Link to schema: [CarcassFault](CarcassFault.md)</b>
 - <b id="#/properties/assessments">assessments</b>
	 - **Description:** Describes details about the carcass assessment
	 - **Type:** `array`
	 - <b id="carcassassessmentcarcassassessment.md">Link to schema: [CarcassAssessment](CarcassAssessment.md)</b>

_Generated with [json-schema-md-doc](https://brianwendt.github.io/json-schema-md-doc/)_