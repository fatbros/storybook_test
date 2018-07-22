import Tx from '../components/Atoms/Tx';
import { withI18next } from '../lib/withI18next';

const Index = props => {
    const { t } = props;

    return (
        <div>
            <Tx large>
                {t('home:welcome')}
            </Tx>
            <Tx large>
                {t('common:integrates_react-i18next')}
            </Tx>
            <Tx large>
                {t('common:pureComponent')}
            </Tx>
        </div>
    );
};

// 先頭namespaceは呼び出す際省略できる
export default withI18next(['common', 'home'])(Index);
