import React from 'react';
import { Editor } from './Editor';
import { safeLoad } from 'js-yaml';
import { EXAMPLES, EXAMPLES_ICONS } from './examples';
import { getMode } from './formatter';
import { generate } from './generate';
import classes from './styles.module.css';
import { CodegenOutput } from './CodegenOutput';
import Select from 'react-select';

const groupedExamples = Object.keys(EXAMPLES).map(catName => {
  return {
    label: catName,
    options: EXAMPLES[catName].map((t, index) => ({ ...t, selectId: `${catName}__${index}` })),
  };
});

function useCodegen(config, schema, documents, templateName) {
  const [error, setError] = React.useState(null);
  const [output, setOutput] = React.useState(null);

  async function run() {
    const result = await generate(config, schema, documents);

    if (typeof result === 'string') {
      setOutput(null);
      setError(result);
    } else {
      setOutput(result);
      setError(null);
    }
  }

  React.useEffect(() => {
    run();
  }, [config, schema, documents, templateName]);

  return {
    error,
    output,
  };
}

const DEFAULT_EXAMPLE = {
  catName: 'TypeScript',
  index: 0,
};

export const LiveDemo = () => {
  const [template, setTemplate] = React.useState(`${DEFAULT_EXAMPLE.catName}__${DEFAULT_EXAMPLE.index}`);
  const [schema, setSchema] = React.useState(EXAMPLES[DEFAULT_EXAMPLE.catName][DEFAULT_EXAMPLE.index].schema);
  const [documents, setDocuments] = React.useState(EXAMPLES[DEFAULT_EXAMPLE.catName][DEFAULT_EXAMPLE.index].documents);
  const [config, setConfig] = React.useState(EXAMPLES[DEFAULT_EXAMPLE.catName][DEFAULT_EXAMPLE.index].config);
  const { output, error } = useCodegen(config, schema, documents, template);

  const changeTemplate = value => {
    const [catName, index] = value.split('__');
    setSchema(EXAMPLES[catName][index].schema);
    setDocuments(EXAMPLES[catName][index].documents);
    setConfig(EXAMPLES[catName][index].config);
    setTemplate(value);
  };

  let mode = null;

  try {
    const parsedConfig = safeLoad(config || '');
    mode = getMode(parsedConfig) || 'typescript';
    mode = mode === 'typescript' ? 'text/typescript' : mode;
  } catch (e) {}

  return (
    <div>
      <div className={classes.picker}>
        <span>Choose Example: </span>
        <Select
          styles={{
            container: styles => ({ ...styles, display: 'inline-block', width: '50vw' }),
            option: styles => ({ ...styles, fontSize: 13 }),
            singleValue: styles => ({ ...styles, width: '100%' }),
          }}
          isMulti={false}
          isClearable={false}
          onChange={e => changeTemplate(e.selectId)}
          getOptionValue={o => o.selectId}
          getOptionLabel={o => {
            return (
              <>
                <span>{o.name}</span>
                <span className={classes.exampleTags}>
                  {o.tags && o.tags.length
                    ? o.tags.map((t, index) =>
                        EXAMPLES_ICONS[t] ? (
                          EXAMPLES_ICONS[t](`${o.name}_${index}`)
                        ) : (
                          <span key={`${o.name}_${index}`} className={classes.exampleTag}>
                            {t}
                          </span>
                        )
                      )
                    : null}
                </span>
              </>
            );
          }}
          defaultValue={groupedExamples[0].options[0]}
          options={groupedExamples}
        />
        {/* <select value={template} onChange={e => changeTemplate(e.target.value)}>
          {Object.keys(EXAMPLES).map(catName => (
            <optgroup label={catName} key={catName}>
              {EXAMPLES[catName].map((item, index) => (
                <option key={`${catName}_${index}`} value={`${catName}__${index}`}>
                  {item.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select> */}
      </div>
      <div className={classes.container}>
        <div className={classes.column}>
          <div className={classes.title}>
            <img className={classes.logo} alt={'GraphQL'} src="/img/GraphQL_Logo.svg" />
            <span className={classes.iconText}>schema.graphql</span>
          </div>
          <Editor lang={'graphql'} onEdit={setSchema} value={schema} />
        </div>
        <div className={classes.column}>
          <div className={classes.title}>
            <img className={classes.logo} alt={'GraphQL'} src="/img/GraphQL_Logo.svg" />
            <span className={classes.iconText}>operation.graphql</span>
          </div>
          <Editor lang={'graphql'} onEdit={setDocuments} value={documents} />
        </div>
        <div className={classes.column}>
          <div className={classes.title}>
            <img className={classes.logo} alt={'Codegen'} src="/img/logo.svg" />
            <span className={classes.iconText}>codegen.yml</span>
          </div>
          <Editor lang={'yaml'} onEdit={setConfig} value={config} />
        </div>
        <div className={classes.column} style={{ minWidth: '34vw', maxWidth: '34vw' }}>
          <CodegenOutput
            editorProps={{
              lang: mode,
              readOnly: true,
            }}
            error={error}
            outputArray={output}
          />
        </div>
      </div>
    </div>
  );
};
