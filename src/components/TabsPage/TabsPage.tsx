import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: FC = () => {
  const { tabId = '' } = useParams();
  const foundTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} selectedTabId={tabId} />
      <div className="block" data-cy="TabContent">
        {foundTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};