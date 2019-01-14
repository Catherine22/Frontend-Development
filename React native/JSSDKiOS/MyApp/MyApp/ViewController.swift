//
//  ViewController.swift
//  MyApp
//
//  Created by Catherine Chen (RD-TW) on 10/01/2019.
//  Copyright © 2019 Catherine Chen. All rights reserved.
//

import UIKit
//import JSCoreSDK

class ViewController: UIViewController, UISearchBarDelegate {

    @IBOutlet weak var logLabel: UILabel!
//    let diamondBridge = DiamondBridge()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        logLabel.numberOfLines = 0
        logLabel.text = ""
        
//        diamondBridge.injectJS()
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
//        var log = "version: \(diamondBridge.getVersion())"
//
//        let user = diamondBridge.getUser()
//        log += "\ngetUser: {name: \(user.name), age: \(user.age), isAdule: \(user.isAdult)}"
//
//        let members = diamondBridge.getMembers()
//        log += "\ngetMembers: [\(members[0]), \(members[1]), \(members[2])]"
//
//        log += "\necho: \(diamondBridge.echo(text))"
//
//        logLabel.text = log
    }
        
    
    func reloadData() {
        print("reload data")
        logLabel.text = "Loading..."
    }
    
    
}

