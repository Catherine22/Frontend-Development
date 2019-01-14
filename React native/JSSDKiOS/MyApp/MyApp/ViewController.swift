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
    
    func queryData(text: String) {
        var log = "version: \(getVersion())"
        
        let user = getUser()
        log += "\ngetUser: {name: \(user.name), age: \(user.age), isAdule: \(user.isAdult)}"
        
        let members = getMembers()
        log += "\ngetMembers: [\(members[0]), \(members[1]), \(members[2])]"
        
        log += "\necho: \(echo(text))"
        
        logLabel.text = log
    }
        
    
    func reloadData() {
        print("reload data")
        logLabel.text = "Loading..."
    }
    
    // SDK
    func injectJS() {
        let resources = ["DiamondBridge"]
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
    
    func getVersion() -> Double {
        let version: JSValue = context.evaluateScript("getVersion()")
        return version.toDouble()
    }
    
    func getUser() -> User {
        let getUser = context.evaluateScript("getUser")
        let response = getUser?.call(withArguments: [""])
        let user = User(name: response!.forProperty("name")!.toString(), age: response!.forProperty("age")!.toNumber()!.intValue, isAdult: response!.forProperty("isAdult")!.toBool())
        return user
    }
    
    func getMembers() -> [String] {
        let getMembers = context.evaluateScript("getMembers")
        let response = getMembers?.call(withArguments: [""])
        var members: [String] = []
        for index in 0..<3 {
            members.append(response!.atIndex(index)!.toString())
        }
        
        return members
    }
    
    func echo(_ text: String) -> String {
        let echo = context.evaluateScript("echo")
        let response = echo?.call(withArguments: [text])
        return response!.toString()
    }
}

