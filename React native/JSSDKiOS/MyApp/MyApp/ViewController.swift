//
//  ViewController.swift
//  MyApp
//
//  Created by Catherine Chen (RD-TW) on 10/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit
import JavaScriptCore

class ViewController: UIViewController, UISearchBarDelegate {

    @IBOutlet weak var logLabel: UILabel!
    let context: JSContext! = JSContext()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        logLabel.numberOfLines = 0
        logLabel.text = ""
        
        injectJS()
    }
    
    func searchBar(_ searchBar: UISearchBar, textDidChange searchText: String) {
        // Do something as users clear the Search Bar
        if searchBar.text?.count == 0 {
            reloadData()
        } else {
            // Query data as users are typing to improve user experience.
//            queryData(text: searchBar.text!)
        }
    }
    
    func searchBarSearchButtonClicked(_ searchBar: UISearchBar) {
        queryData(text: searchBar.text!)
    }
    
    func injectJS() {
        let resources = ["nebulahelper", "stringhelper", "urlbuilder", "uuid", "constants", "strings", "wording/en", "wording/ja", "DiamondBridge"]
        resources.forEach { (res) in
            let fileURL = Bundle.main.url(forResource: res, withExtension: "js")
            do {
                let jsCode = try NSString.init(contentsOf: fileURL!, encoding: String.Encoding.utf8.rawValue)
                context.evaluateScript("\(jsCode)")
//                print("Loaded \(res): \(jsCode)")
            } catch {
                print("Error loading js code: \(error)")
            }
        }
    }
    
    func queryData(text: String) {
        let version: JSValue = context.evaluateScript("getVersion()")
        var log = "version: \(version.toDouble())"
        
        let getUser = context.evaluateScript("getUser")
        var response = getUser?.call(withArguments: [""])
        log += "\ngetUser: {name: \(response!.forProperty("name")!), age: \(response!.forProperty("age")!), isAdule: \(response!.forProperty("isAdult")!)}"
        
        let getMembers = context.evaluateScript("getMembers")
        response = getMembers?.call(withArguments: [""])
        log += "\ngetMembers: [\(response!.atIndex(0)!), \(response!.atIndex(1)!), \(response!.atIndex(2)!)]"
        
        let echo = context.evaluateScript("echo")
        response = echo?.call(withArguments: [text])
        log += "\necho: \(response!)"
        
        logLabel.text = log
    }
        
    
    func reloadData() {
        print("reload data")
        logLabel.text = "Loading..."
    }


}

