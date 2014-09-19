public with sharing class ComponentsTest {


    public ComponentsTest() {

    }

    public ComponentsTest(ApexPages.StandardController stdController) {

    }

    public PageReference fakeError() {
        ApexPages.Message msg = new ApexPages.Message(ApexPages.Severity.ERROR,'Error: This is a fake error');
        ApexPages.addMessage(msg);
        return null;
    }

    public PageReference changePage() {
        return Page.OneStarterRecordAction;
    }
}