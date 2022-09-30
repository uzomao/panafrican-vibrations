import React from 'react'
import { awardeeNames as names } from '../awardee-names'

const AwardeesMap = ({ awardeeSelected }) => {
    const { alice, athandiwe, delasi, keren, souleymane, uzoma } = names

    return (
        <map name="image-map">
            <area target="" onClick={() => awardeeSelected(alice) } alt="alice" title="alice" coords="1,297,2,291,18,285,31,269,45,245,55,229,66,211,77,199,80,188,83,181,93,174,96,163,101,149,112,143,119,140,130,142,136,151,136,167,137,179,145,183,158,186,163,199,161,211,145,218,143,234,139,247,115,252,104,256,101,283,96,303,99,325,89,337,74,342,64,342,76,312,72,266,72,244,65,254,49,274,43,299,28,307,4,303" shape="poly" />
            <area target="" onClick={() => awardeeSelected(keren) } alt="keren" title="keren" coords="198,150,197,162,199,179,197,189,187,191,177,186,168,186,167,206,149,221,141,245,128,309,137,332,126,356,153,351,166,303,174,279,172,301,181,319,187,334,204,331,192,298,190,267,206,257,217,253,222,237,232,226,240,219,244,204,242,196,228,190,222,185,228,173,228,159,222,150,207,149" shape="poly" />
            <area target="" onClick={() => awardeeSelected(athandiwe) } alt="athandiwe" title="athandiwe" coords="285,144,281,163,264,170,250,193,244,218,253,225,263,228,255,248,264,275,271,305,268,331,276,339,296,338,284,307,292,257,297,269,303,293,304,313,296,332,313,335,322,327,319,302,323,288,327,253,341,254,346,246,344,235,347,224,343,198,331,171,323,168,313,141,300,139,290,140" shape="poly" />
            <area target="" onClick={() => awardeeSelected(uzoma) } alt="uzoma" title="uzoma" coords="348,212,348,191,355,177,366,174,371,156,372,133,392,126,404,137,407,152,405,164,411,176,423,183,428,200,429,212,436,228,434,250,428,285,425,300,426,315,432,331,421,339,408,329,407,309,412,288,407,253,396,252,381,251,374,250,374,272,370,288,368,305,371,323,368,332,359,338,346,338,353,312,353,287,347,258,345,235" shape="poly" />
            <area target="" onClick={() => awardeeSelected('Gloria') } alt="gloria" title="gloria" coords="453,156,459,134,476,128,493,135,496,153,501,168,518,185,534,205,528,226,521,244,515,265,509,291,504,305,516,319,516,338,493,341,476,334,475,324,489,315,440,253,436,234,432,216,429,202,436,185,441,176" shape="poly" />
            <area target="" onClick={() => awardeeSelected(delasi) } alt="delasi" title="delasi" coords="527,186,556,165,566,167,563,141,563,134,594,129,606,140,600,165,602,175,615,178,619,195,637,196,637,208,620,213,616,222,608,226,616,245,624,265,641,286,651,306,678,332,737,327,744,347,727,357,693,363,670,362,651,354,636,348,589,277,579,290,575,310,572,320,580,336,575,341,550,340,541,327,544,301,548,266,536,258,530,244,532,222,535,204" shape="poly" />
            <area target="" onClick={() => awardeeSelected(souleymane) } alt="souleymane" title="souleymane" coords="628,155,639,147,651,160,649,178,672,190,685,219,700,225,722,215,739,226,742,255,739,282,737,293,748,312,741,320,720,314,718,307,721,292,719,242,700,260,681,252,681,271,686,296,702,318,693,325,678,325,673,304,659,274,654,251,641,250,638,228,627,229,622,216,638,210,638,194,621,194,619,183" shape="poly" />
        </map>
    )
}

export default AwardeesMap