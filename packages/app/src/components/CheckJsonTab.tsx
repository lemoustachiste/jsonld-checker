import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CheckResult as JsonLdCheckResult } from 'jsonld-checker';
import JsonEditor from './JsonEditor';
import JsonLdPlaygroundButton from './JsonLdPlaygroundButton';
import CheckJsonButton from './CheckJsonButton';
import CheckResult from './CheckResult';
import ShareButton from './ShareButton';
import { getData, updateData } from '../utils';

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    margin: theme.spacing(1),
  },
  contentWrapper: {
    display: 'table',
    margin: theme.spacing(1),
  },
  checkResult: {
    marginBottom: theme.spacing(2),
  },
}));

const CheckJsonTab: React.FunctionComponent<{}> = () => {
  const classes = useStyles();
  const [jsonValue, setJsonValue] = React.useState(() => {
    const jsonData = getData('json');
    return jsonData;
  });

  const [result, setResult] = React.useState<JsonLdCheckResult>();

  const onChange = (value: string) => {
    setResult(undefined);
    setJsonValue(value);
  };

  React.useEffect(() => {
    updateData('json', encodeURIComponent(jsonValue));
  }, [jsonValue]);

  return (
    <>
      <div className={classes.buttonWrapper}>
        <CheckJsonButton value={jsonValue} setResult={setResult} />
        <JsonLdPlaygroundButton value={jsonValue} />
        <ShareButton />
      </div>
      <div className={classes.contentWrapper}>
        <CheckResult className={classes.checkResult} result={result} />
        <JsonEditor onChange={onChange} value={jsonValue} />
      </div>
    </>
  );
};

export default CheckJsonTab;
