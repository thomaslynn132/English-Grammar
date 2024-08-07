import React from "react";
import "../../App.css";

export default function Adjective() {
  return (
    <>
      <div className="container">
        An adjective is a word that name an attribute to a noun.
        <br />
        There are five kinds of adjectives accoding to the meaning and three
        kinds accoding to the composition.
        <br />
        Five kinds of s accoding to their meanings are:
        <ol type="123">
          <li>Descriptive or Qualitative Adjective</li>
          <li>Quantitative or Mathematical Adjective</li>
          <li>Demonstrative Adjective</li>
          <li>Possessive Adjective</li>
          <li>Interrogative Adjective</li>
        </ol>
        Three kinds of adjectives accoding to their compositions are:
        <ol type="123">
          <li>Original Adjectives</li>
          <li>Adjectives derived from Nouns and Verbs</li>
          <li>Compound Adjectives</li>
        </ol>
        <h3> Five kinds of adjectives accoding to their meanings:</h3>
        <ol type="123">
          <li>
            <h5>Descriptive or Qualitative Adjectives</h5>
            Describtive or qualitative adjectives modify nouns by describing the
            qualities, features or apperances of nouns. <br />
            (Example. hot, cold, cute)
          </li>
          <li>
            <h5>Quantitative or Mathematical Adjective</h5>
            Quantitative or mathematical adjectives modify nouns by describing
            the number or quantity of countable and uncountable nouns. <br />
            (Example. many, much, a little, a few of, one, two, three)
          </li>
          <li>
            <h5>Demonstrative Adjective</h5>
            Demonstrative adjectives modify nouns by describing a specific noun
            or specific nouns. <br />
            There are only four demonstrative adjectives namely 'this', 'that',
          </li>
          <li>
            <h5>Possessive Adjectives</h5>
            Possessive adjectives modify nouns by describing the ownership of
            possession. <br />
            (Example. my, our, your, his, her, its, their, Thomas's, Dogs')
          </li>
          <li>
            <h5>Interrogative Adjectives</h5>
            Interrogative adjectives modify nouns by asking the qualities,
            quantities or possessions. <br />( What, Which, Whose, How many, How
            much) <br />
            <b>
              Note: If there is not a noun behind an interrogative adjective, it
              is an interrogative pronoun.
            </b>
          </li>
        </ol>
        <h3> Three kinds of adjectives accoding to their compositions:</h3>
        <h5>1. Originl Adjectives</h5>
        (Example. bright, some, cute)
        <h5>2. Adjectives derived from Nouns and Verbs</h5>
        <p>
          Some adjectives are derived from from nouns, verbs or even other
          adjectives by using suffixes (endings) and prefixes (letters placed
          before the word).
        </p>
        <p>
          <b>Example</b>
        </p>
        <table>
          <tr>
            <th>Noun or Verb</th>
            <th>Suffix</th>
            <th>Adjective</th>
          </tr>
          <tr>
            <th>fame</th>
            <th>-ous</th>
            <th>famous</th>
          </tr>
          <tr>
            <th>interest</th>
            <th>-ing</th>
            <th>interesting</th>
          </tr>
          <tr>
            <th>excite</th>
            <th>-ed</th>
            <th>excited</th>
          </tr>
          <tr>
            <th>profession</th>
            <th>-al</th>
            <th>professional</th>
          </tr>
          <tr>
            <th>beauty</th>
            <th>-ful</th>
            <th>beautiful</th>
          </tr>
          <tr>
            <th>care</th>
            <th>-less</th>
            <th>careless</th>
          </tr>
          <tr>
            <th>friend</th>
            <th>-ly</th>
            <th>friendly</th>
          </tr>
          <tr>
            <th>comfort</th>
            <th>-able, -ible</th>
            <th>comfortable, divisible</th>
          </tr>
          <tr>
            <th>dirt</th>
            <th>-y</th>
            <th>dirty</th>
          </tr>
          <tr>
            <th>create</th>
            <th>-ive</th>
            <th>creative</th>
          </tr>
          <tr>
            <th>style</th>
            <th>-ish</th>
            <th>stylish</th>
          </tr>
          <tr>
            <th>China,Japan</th>
            <th>-ese</th>
            <th>Chinese,Japanese</th>
          </tr>
          <tr>
            <th>wood, gold</th>
            <th>-en</th>
            <th>wooden, golden</th>
          </tr>
          <tr>
            <th>trouble</th>
            <th>-some</th>
            <th>troublesome</th>
          </tr>
        </table>
        <h5>3. Compound Adjectives</h5>
        <p>
          Some adjectives are formed by the combination of two or more words.
          Mostly, those words are connected by a hyphen "-".
        </p>
        <table>
          <tr>
            <th colSpan={2}>Format</th>
            <th>Example</th>
          </tr>
          <tr>
            <th>Number</th>
            <th>Noun</th>
            <th>thirty-minute break</th>
          </tr>
          <tr>
            <th>word</th>
            <th>adjective</th>
            <th>air-tight seal</th>
          </tr>
          <tr>
            <th>word</th>
            <th>noun</th>
            <th>first-class meat</th>
          </tr>
          <tr>
            <th>word</th>
            <th>participles(present or past)</th>
            <th>time-saving method, gently-picked fruits</th>
          </tr>
          <tr>
            <th colSpan={2}>titles</th>
            <th>One Piece actors</th>
          </tr>
          <tr>
            <th colSpan={2}>Quotation Marks</th>
            <th>"get out now" looks</th>
          </tr>
        </table>
        <h3>Degrees of Adjectives</h3>
        <h5>
          There are three degrees of adjectives namely: Positive, Comparative,
          Superlative
        </h5>
        <p>
          (Example. good, better best <br />
          beautiful, more beautiful, most beautiful)
        </p>
        <h5>
          If there are more than an adjective before a noun, they can be ordered
          by their meanings as follows:
        </h5>
        <ol typeof="123">
          <li>
            Quantity or number (Example. a, an, the, some, one, two, my,---)
          </li>
          <li>Opinion (Example. beautiful, intelligent, lovely,---)</li>
          <li>Size (Example. small, big, large,--)</li>
          <li>Physical quality (Example. soft, rough,---)</li>
          <li>Age (Example. old, young,---)</li>
          <li>Shape (Example. round, square,---)</li>
          <li>Color (Example. red, blue,---)</li>
          <li>Origin (Example. Japanese, French,---)</li>
          <li>Material (Example. wooden, golden, glass,---)</li>
          <li>Purpose (Example. educational, decorative, industrial,---)</li>
        </ol>
      </div>
    </>
  );
}
